import { Button, Container, SectionHeading } from "@/components/ui";
import { SparkleDecor } from "@/components/SparkleDecor";

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
      <SparkleDecor className="pointer-events-none absolute right-16 top-12 h-10 w-10 opacity-90" />

      <Container className="relative">
        <div className="relative mx-auto max-w-3xl text-center">
          <SparkleDecor className="pointer-events-none absolute -left-6 top-8 hidden h-8 w-8 md:block" />
          <SectionHeading className="mb-5 text-white">
            Your customers have already changed the way they search.
          </SectionHeading>

          <p className="mb-6 text-2xl font-extrabold md:text-[2rem]">
            Has your website changed with them?
          </p>

          <p className="mb-12 text-lg leading-relaxed text-white/75">
            Reserve your place today and discover how to prepare your business
            for the next generation of search.
          </p>

          <Button href="https://luma.com/i9pt1a6j" variant="ghost">
            <span className="sm:hidden">Register free</span>
            <span className="hidden sm:inline">Reserve your place for free</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
