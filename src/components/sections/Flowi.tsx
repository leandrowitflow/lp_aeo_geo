import { Button, SectionHeading, SectionShell } from "@/components/ui";
import { FlowiOrb } from "@/components/illustrations";

export function Flowi() {
  return (
    <SectionShell id="flowi" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <FlowiOrb />
        <SectionHeading className="mb-5">Still have questions?</SectionHeading>

        <h3 className="mb-7 text-2xl font-extrabold text-brand-purple">
          Meet Flowi.
        </h3>

        <div className="rounded-3xl border border-brand-purple/10 bg-brand-purple-pale/40 px-8 py-10 md:px-12">
          <p className="text-lg leading-[1.75] text-brand-text-muted">
            Instead of filling in a traditional registration form, you can chat
            with <strong className="font-bold text-brand-purple">Flowi</strong>,
            our AI assistant. Flowi can answer your questions about the event,
            explain the fundamentals of SEO, AEO and GEO, help you decide
            whether this talk is right for you, and, if you decide to join us,
            complete your registration during the conversation.
          </p>
        </div>

        <div className="mt-10">
          <Button href="#flowi" variant="outline">
            Chat with Flowi
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
