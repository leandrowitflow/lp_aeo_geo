import { CheckIcon } from "@/components/Icons";
import { SectionHeading, SectionLabel, SectionShell } from "@/components/ui";

const takeaways = [
  "Why ranking on Google is no longer enough.",
  "How AI-powered search engines work.",
  "Why some websites never appear in AI-generated answers.",
  "What you can do to prepare your website for the future of search.",
  "The most common mistakes preventing businesses from being found.",
  "How to turn your website into a digital asset built for tomorrow's search landscape.",
];

export function Takeaways() {
  return (
    <SectionShell className="bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <SectionLabel>Outcomes</SectionLabel>
          <SectionHeading className="mb-4">
            What will you take away from this session?
          </SectionHeading>
          <p className="text-lg text-brand-text-muted">
            By the end of the talk, you&apos;ll understand:
          </p>
        </div>

        <ul className="grid gap-5 md:grid-cols-2">
          {takeaways.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-brand-purple/8 bg-brand-gray/80 px-6 py-5"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="leading-relaxed text-brand-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
