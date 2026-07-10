import { SparkleDecor } from "@/components/SparkleDecor";
import { SectionHeading, SectionLabel, SectionShell } from "@/components/ui";

export function SearchChanged() {
  return (
    <SectionShell className="bg-white">
      <div className="relative mx-auto max-w-3xl text-center">
        <SparkleDecor className="pointer-events-none absolute -right-4 -top-2 hidden h-10 w-10 md:block lg:-right-8" />
        <SectionLabel>The shift</SectionLabel>
        <SectionHeading className="mb-10">
          Your customers have changed the way they search.
        </SectionHeading>

        <div className="space-y-7 text-lg leading-[1.75] text-brand-text-muted md:text-xl">
          <p>
            Most businesses are still optimising their websites to rank on
            Google.
          </p>
          <p>
            But today, customers ask questions, seek recommendations and compare
            suppliers using AI-powered search tools before they even visit a
            website.
          </p>

          <div className="relative mx-auto mt-10 max-w-xl rounded-3xl border border-brand-purple/10 bg-brand-purple-pale/50 px-8 py-10">
            <SparkleDecor className="pointer-events-none absolute -left-3 -top-3 h-8 w-8" />
            <p className="text-lg font-semibold text-brand-purple">
              So the real question is:
            </p>
            <p className="mt-3 text-2xl font-extrabold text-brand-purple md:text-3xl">
              Is your business part of those answers?
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
