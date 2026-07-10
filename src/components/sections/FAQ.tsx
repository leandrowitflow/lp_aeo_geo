import { SectionHeading, SectionLabel, SectionShell } from "@/components/ui";

const faqs = [
  {
    question: "Is the event free?",
    answer:
      "Yes. Attendance is completely free, but registration is required.",
  },
  {
    question: "Can I attend online?",
    answer:
      "Absolutely. If you choose the online option, you'll receive your access link by email before the event.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "Not at all. This talk is designed for business owners, directors and decision-makers. We'll explain everything in a practical and accessible way.",
  },
  {
    question: "Can my website be reviewed?",
    answer:
      "Yes. During your conversation with Flowi, you can let us know if you'd like your website to be considered for a live review during the session.",
  },
];

export function FAQ() {
  return (
    <SectionShell className="bg-brand-gray">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-brand-purple/8 bg-white shadow-sm"
            >
              <summary className="cursor-pointer list-none px-7 py-5 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  <span className="text-left text-lg font-bold text-brand-purple">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple-pale text-xl font-light text-brand-purple transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-brand-purple/8 px-7 pb-6 pt-4 leading-relaxed text-brand-text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
