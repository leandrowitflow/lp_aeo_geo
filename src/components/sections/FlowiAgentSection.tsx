import { FlowiAgent } from "@/components/FlowiAgent";
import { SectionHeading, SectionShell } from "@/components/ui";

export function FlowiAgentSection() {
  return (
    <SectionShell id="flowi" className="bg-white">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading className="mb-4">Chat with Flowi</SectionHeading>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-[1.75] text-brand-text-muted sm:mb-10 sm:text-lg">
          Your AI assistant for this event. Ask questions, explore SEO, AEO and
          GEO, or register your place in one conversation.
        </p>

        <FlowiAgent />
      </div>
    </SectionShell>
  );
}
