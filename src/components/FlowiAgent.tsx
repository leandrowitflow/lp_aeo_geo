"use client";

import { ConversationProvider, useConversation } from "@elevenlabs/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { flowiAgentConfig } from "@/content/flowi";

type ChatMessage = {
  id: string;
  role: "user" | "agent";
  text: string;
};

type IncomingMessagePayload = {
  message: string;
  event_id?: number;
  source: "user" | "ai";
  role: "user" | "agent";
};

type TextResponsePart = {
  text: string;
  type: "start" | "delta" | "stop";
  event_id: number;
};

type AgentResponseCorrectionEvent = {
  corrected_agent_response: string;
  original_agent_response: string;
  event_id: number;
};

function messageRole(payload: IncomingMessagePayload): "user" | "agent" | null {
  if (payload.role === "agent" || payload.source === "ai") return "agent";
  if (payload.role === "user" || payload.source === "user") return "user";
  return null;
}

function VoiceVisualizer({ active, speaking }: { active: boolean; speaking: boolean }) {
  const bars = [0.45, 0.75, 1, 0.65, 0.85];

  return (
    <div
      className="flex h-8 items-end justify-center gap-1.5"
      aria-hidden="true"
    >
      {bars.map((scale, index) => (
        <span
          key={index}
          className={`w-1.5 rounded-full bg-brand-purple transition-all duration-300 ${
            active
              ? speaking
                ? "animate-flowi-speak"
                : "animate-flowi-listen"
              : "h-2 opacity-30"
          }`}
          style={{
            animationDelay: `${index * 120}ms`,
            height: active ? `${scale * 100}%` : undefined,
          }}
        />
      ))}
    </div>
  );
}

function statusLabel(
  status: ReturnType<typeof useConversation>["status"],
  isSpeaking: boolean,
  isMuted: boolean,
  isAssistantPaused: boolean,
): string {
  switch (status) {
    case "connecting":
      return "Connecting to Flowi...";
    case "connected":
      if (isAssistantPaused) return "Flowi is paused";
      if (isMuted) return "Microphone muted";
      return isSpeaking ? "Flowi is speaking" : "Flowi is listening";
    case "error":
      return "Connection interrupted";
    case "disconnected":
      return "Ready when you are";
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}

function FlowiAgentPanel() {
  const [error, setError] = useState<string | null>(null);
  const [textMessage, setTextMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isAssistantPaused, setIsAssistantPaused] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const messageId = useRef(0);
  const seenMessageKeys = useRef<Set<string>>(new Set());
  const streamingAgentMessageId = useRef<string | null>(null);

  const nextMessageId = useCallback(() => {
    messageId.current += 1;
    return `msg-${messageId.current}`;
  }, []);

  const resetTranscriptState = useCallback(() => {
    seenMessageKeys.current.clear();
    streamingAgentMessageId.current = null;
  }, []);

  const appendMessage = useCallback(
    (message: Omit<ChatMessage, "id">) => {
      setMessages((current) => [
        ...current,
        { ...message, id: nextMessageId() },
      ]);
    },
    [nextMessageId],
  );

  const handleIncomingMessage = useCallback(
    (payload: IncomingMessagePayload) => {
      const text = payload.message?.trim();
      if (!text) return;

      const role = messageRole(payload);
      if (!role) return;

      if (payload.event_id !== undefined) {
        const dedupeKey = `${role}:${payload.event_id}`;
        if (seenMessageKeys.current.has(dedupeKey)) return;
        seenMessageKeys.current.add(dedupeKey);
      }

      setMessages((current) => {
        if (role === "user") {
          const lastUser = [...current].reverse().find((m) => m.role === "user");
          if (lastUser?.text === text) return current;
          return [...current, { id: nextMessageId(), role: "user", text }];
        }

        const streamId = streamingAgentMessageId.current;
        if (streamId) {
          streamingAgentMessageId.current = null;
          return current.map((message) =>
            message.id === streamId ? { ...message, text } : message,
          );
        }

        const lastAgent = [...current].reverse().find((m) => m.role === "agent");
        if (lastAgent?.text === text) return current;

        if (
          lastAgent &&
          lastAgent.text.length > 0 &&
          text.startsWith(lastAgent.text)
        ) {
          return current.map((message) =>
            message.id === lastAgent.id ? { ...message, text } : message,
          );
        }

        return [...current, { id: nextMessageId(), role: "agent", text }];
      });
    },
    [nextMessageId],
  );

  const handleAgentChatResponsePart = useCallback(
    (part: TextResponsePart) => {
      const { text, type } = part;

      setMessages((current) => {
        if (type === "start") {
          const id = nextMessageId();
          streamingAgentMessageId.current = id;
          return [...current, { id, role: "agent", text: text || "" }];
        }

        const streamId = streamingAgentMessageId.current;
        if (!streamId) {
          if (type === "delta" && text) {
            const id = nextMessageId();
            streamingAgentMessageId.current = id;
            return [...current, { id, role: "agent", text }];
          }
          return current;
        }

        const updated = current.map((message) => {
          if (message.id !== streamId) return message;
          if (type === "delta") {
            return { ...message, text: message.text + text };
          }
          return message;
        });

        if (type === "stop") {
          streamingAgentMessageId.current = null;
        }

        return updated;
      });
    },
    [nextMessageId],
  );

  const handleAgentResponseCorrection = useCallback(
    (event: AgentResponseCorrectionEvent) => {
      const text = event.corrected_agent_response?.trim();
      if (!text) return;

      setMessages((current) => {
        let lastAgentIndex = -1;
        for (let index = current.length - 1; index >= 0; index -= 1) {
          if (current[index].role === "agent") {
            lastAgentIndex = index;
            break;
          }
        }

        if (lastAgentIndex < 0) {
          return [...current, { id: nextMessageId(), role: "agent", text }];
        }

        const updated = [...current];
        updated[lastAgentIndex] = { ...updated[lastAgentIndex], text };
        return updated;
      });
    },
    [nextMessageId],
  );

  const transcriptHandlersRef = useRef({
    onMessage: handleIncomingMessage,
    onAgentChatResponsePart: handleAgentChatResponsePart,
    onAgentResponseCorrection: handleAgentResponseCorrection,
  });

  useEffect(() => {
    transcriptHandlersRef.current = {
      onMessage: handleIncomingMessage,
      onAgentChatResponsePart: handleAgentChatResponsePart,
      onAgentResponseCorrection: handleAgentResponseCorrection,
    };
  }, [
    handleIncomingMessage,
    handleAgentChatResponsePart,
    handleAgentResponseCorrection,
  ]);

  const conversation = useConversation({
    onConnect: () => {
      setError(null);
      resetTranscriptState();
    },
    onDisconnect: () => {
      setError(null);
      setTextMessage("");
      setIsAssistantPaused(false);
      resetTranscriptState();
    },
    onError: (message) => {
      setError(message || "Unable to connect to Flowi.");
    },
  });

  const isConnected = conversation.status === "connected";
  const isConnecting = conversation.status === "connecting";
  const isActive = isConnected || isConnecting;

  useEffect(() => {
    transcriptRef.current?.scrollTo({
      top: transcriptRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, conversation.isSpeaking]);

  const handleStart = useCallback(async () => {
    try {
      setError(null);
      setMessages([]);
      setIsAssistantPaused(false);
      resetTranscriptState();
      await navigator.mediaDevices.getUserMedia({ audio: true });
      conversation.startSession({
        agentId: flowiAgentConfig.agentId,
        connectionType: "webrtc",
        onMessage: (payload) =>
          transcriptHandlersRef.current.onMessage(payload),
        onAgentChatResponsePart: (part) =>
          transcriptHandlersRef.current.onAgentChatResponsePart(part),
        onAgentResponseCorrection: (event) =>
          transcriptHandlersRef.current.onAgentResponseCorrection(event),
      });
    } catch {
      setError("Microphone access is required to talk with Flowi.");
    }
  }, [conversation, resetTranscriptState]);

  const handleEnd = useCallback(() => {
    conversation.endSession();
    setTextMessage("");
    setIsAssistantPaused(false);
  }, [conversation]);

  const handleToggleAssistantPause = useCallback(() => {
    if (!isConnected) return;

    setIsAssistantPaused((paused) => {
      const nextPaused = !paused;
      conversation.setVolume({ volume: nextPaused ? 0 : 1 });
      return nextPaused;
    });
  }, [conversation, isConnected]);

  const handleSendMessage = useCallback(() => {
    const trimmed = textMessage.trim();
    if (!trimmed || !isConnected) return;
    appendMessage({ role: "user", text: trimmed });
    conversation.sendUserMessage(trimmed);
    setTextMessage("");
  }, [appendMessage, conversation, isConnected, textMessage]);

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-brand-purple/10 bg-white shadow-2xl shadow-brand-purple/15 sm:rounded-[2rem]">
      <div className="bg-gradient-to-r from-brand-purple via-brand-purple-deep to-brand-purple-dark px-4 py-4 text-white sm:px-7 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <div className="relative shrink-0">
              <div
                className={`absolute -inset-1 rounded-full bg-white/20 ${
                  isConnected && !conversation.isSpeaking && !isAssistantPaused
                    ? "animate-pulse"
                    : ""
                }`}
                aria-hidden="true"
              />
              <Image
                src="/images/flowi-avatar.png"
                alt="Flowi"
                width={64}
                height={64}
                className="relative h-12 w-12 rounded-full border-2 border-white/70 object-cover shadow-lg sm:h-16 sm:w-16"
              />
            </div>

            <div className="min-w-0 flex-1 text-left">
              <p className="text-base font-bold sm:text-lg">
                {flowiAgentConfig.name}
              </p>
              <p className="truncate text-xs text-white/80 sm:text-sm">
                {statusLabel(
                  conversation.status,
                  conversation.isSpeaking,
                  conversation.isMuted,
                  isAssistantPaused,
                )}
              </p>
            </div>
          </div>

          {isActive ? (
            <div className="flex shrink-0 items-center justify-end gap-2">
              <button
                type="button"
                onClick={handleToggleAssistantPause}
                disabled={!isConnected}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition disabled:cursor-not-allowed disabled:opacity-50 sm:gap-1.5 sm:px-4 sm:py-2 sm:text-xs ${
                  isAssistantPaused
                    ? "border-white bg-white text-brand-purple hover:bg-white/90"
                    : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                }`}
                aria-label={
                  isAssistantPaused ? "Resume Flowi" : "Pause Flowi"
                }
              >
                <PauseBadge paused={isAssistantPaused} />
                <span className="hidden min-[400px]:inline">
                  {isAssistantPaused ? "Resume" : "Pause"}
                </span>
              </button>
              <button
                type="button"
                onClick={handleEnd}
                className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-white/20 sm:px-4 sm:py-2 sm:text-xs"
              >
                End
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {!isActive ? (
        <div className="px-4 py-8 text-center sm:px-6 sm:py-10 md:px-10">
          <p className="text-xl font-extrabold text-brand-purple sm:text-2xl">
            Your AI event assistant
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-brand-text-muted md:text-base">
            Ask about the event, SEO, AEO, GEO, or register your place. Talk out
            loud or type — use whichever you prefer.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-purple-pale px-3 py-1.5 text-xs font-semibold text-brand-purple sm:px-4 sm:py-2 sm:text-sm">
              <MicBadge />
              Voice
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-purple-pale px-3 py-1.5 text-xs font-semibold text-brand-purple sm:px-4 sm:py-2 sm:text-sm">
              <KeyboardBadge />
              Text
            </span>
          </div>

          <button
            type="button"
            onClick={handleStart}
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-brand-yellow px-4 py-2 text-xs font-bold tracking-wide text-black shadow-lg shadow-brand-yellow/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6b415] hover:shadow-brand-yellow/40 sm:px-10 sm:py-4 sm:text-sm"
          >
            <span className="sm:hidden">Start chat</span>
            <span className="hidden sm:inline">Start conversation</span>
          </button>
        </div>
      ) : (
        <>
          <div
            ref={transcriptRef}
            className="h-72 space-y-3 overflow-y-auto bg-brand-gray/70 px-5 py-5 md:h-80 md:px-6"
          >
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <VoiceVisualizer
                  active={isConnected}
                  speaking={conversation.isSpeaking}
                />
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-text-muted">
                  {isConnecting
                    ? "Getting everything ready..."
                    : "Say hello or type your first message below."}
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      message.role === "user"
                        ? "rounded-br-md bg-brand-purple text-white"
                        : "rounded-bl-md border border-brand-purple/10 bg-white text-brand-text"
                    }`}
                  >
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] opacity-70">
                      {message.role === "user" ? "You" : "Flowi"}
                    </p>
                    {message.text}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-brand-purple/10 bg-white px-3 py-3 sm:px-4 sm:py-4 md:px-6">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              <VoiceVisualizer
                active={isConnected && !conversation.isMuted && !isAssistantPaused}
                speaking={conversation.isSpeaking && !isAssistantPaused}
              />
              <p className="text-center text-[11px] font-medium text-brand-text-muted sm:text-left sm:text-xs">
                {isConnected
                  ? isAssistantPaused
                    ? "Flowi is paused"
                    : conversation.isMuted
                      ? "Unmute to talk, or type"
                      : "Speak or type below"
                  : "Connecting..."}
              </p>
            </div>

            <form
              className="flex min-w-0 items-end gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                handleSendMessage();
              }}
            >
              {isConnected ? (
                <button
                  type="button"
                  onClick={() => conversation.setMuted(!conversation.isMuted)}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition sm:h-12 sm:w-12 ${
                    conversation.isMuted
                      ? "border-brand-purple/20 bg-brand-gray text-brand-text-muted"
                      : "border-brand-purple/20 bg-brand-purple-pale text-brand-purple hover:border-brand-purple"
                  }`}
                  aria-label={
                    conversation.isMuted ? "Unmute microphone" : "Mute microphone"
                  }
                >
                  <MicBadge muted={conversation.isMuted} />
                </button>
              ) : null}

              <label htmlFor="flowi-message" className="sr-only">
                Message to Flowi
              </label>
              <textarea
                id="flowi-message"
                value={textMessage}
                onChange={(event) => setTextMessage(event.target.value)}
                rows={1}
                disabled={!isConnected}
                placeholder={
                  isConnected
                    ? "Type your message..."
                    : "Waiting for connection..."
                }
                className="min-h-10 max-h-28 min-w-0 flex-1 resize-none overflow-hidden rounded-2xl border border-brand-purple/15 bg-brand-gray/50 px-3 py-2.5 text-sm text-brand-text outline-none transition focus:border-brand-purple disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-12 sm:px-4 sm:py-3"
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    handleSendMessage();
                  }
                }}
              />

              <button
                type="submit"
                disabled={!isConnected || !textMessage.trim()}
                className="flex h-10 shrink-0 items-center justify-center rounded-2xl bg-brand-purple px-3 text-xs font-bold text-white transition hover:bg-brand-purple-dark disabled:cursor-not-allowed disabled:opacity-50 sm:h-12 sm:px-5 sm:text-sm"
              >
                Send
              </button>
            </form>
          </div>
        </>
      )}

      {error ? (
        <p className="border-t border-red-100 bg-red-50 px-5 py-3 text-sm text-red-700 md:px-6">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function PauseBadge({ paused = false }: { paused?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      {paused ? (
        <path d="M8 5v14l11-7L8 5Z" />
      ) : (
        <>
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </>
      )}
    </svg>
  );
}

function MicBadge({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Z" />
      {!muted ? <path d="M19 11a7 7 0 0 1-14 0" /> : null}
      <path d="M12 18v3" />
      {muted ? <path d="M4 4l16 16" /> : null}
    </svg>
  );
}

function KeyboardBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10" />
    </svg>
  );
}

export function FlowiAgent() {
  return (
    <ConversationProvider>
      <FlowiAgentPanel />
    </ConversationProvider>
  );
}
