import { Button, SectionHeading } from "@/components/ui";
import { Sparkles } from "@/components/Sparkles";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple via-brand-purple-deep to-brand-purple-dark py-24 text-white md:py-32">
      <div
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-80 w-80 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />
      <Sparkles className="pointer-events-none absolute right-16 top-12 h-8 w-8 text-brand-yellow opacity-80" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionHeading className="mb-5 text-white">
          Your customers have already changed the way they search.
        </SectionHeading>

        <p className="mb-6 text-2xl font-extrabold md:text-[2rem]">
          Has your website changed with them?
        </p>

        <p className="mb-12 text-lg leading-relaxed text-white/75">
          Reserve your place today and discover how to prepare your business for
          the next generation of search.
        </p>

        <Button href="#register" variant="ghost">
          Reserve your place for free
        </Button>
      </div>
    </section>
  );
}
