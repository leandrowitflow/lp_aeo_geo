import { SectionHeading, SectionLabel, SectionShell } from "@/components/ui";

const questions = [
  "Why do some websites continue to be found while others are becoming invisible?",
  "How does AI decide which businesses to recommend?",
  "Is traditional SEO still enough?",
  "What are AEO and GEO, and why do they matter?",
  "How can you prepare your website for the next generation of search?",
];

export function Questions() {
  return (
    <SectionShell className="bg-brand-gray">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <SectionLabel>What we&apos;ll cover</SectionLabel>
          <SectionHeading>
            In this talk, we&apos;ll answer the questions many businesses still
            aren&apos;t asking.
          </SectionHeading>
        </div>

        <ul className="space-y-4">
          {questions.map((question, i) => (
            <li
              key={question}
              className="flex gap-5 rounded-2xl border border-white bg-white px-7 py-6 shadow-sm shadow-brand-purple/5 transition-shadow hover:shadow-md hover:shadow-brand-purple/10"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-extrabold text-brand-purple-deep">
                {i + 1}
              </span>
              <span className="pt-0.5 text-base leading-relaxed text-brand-text md:text-lg">
                {question}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-lg leading-relaxed text-brand-text-muted">
          We&apos;ll explore real examples, practical case studies and answer
          your questions throughout the session.
        </p>
      </div>
    </SectionShell>
  );
}
