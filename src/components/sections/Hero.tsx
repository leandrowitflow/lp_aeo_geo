import { Button, Container, SparkleHeading } from "@/components/ui";
import { CalendarIcon, ClockIcon, LocationIcon } from "@/components/Icons";
import { heroContent, type HeroEventIcon } from "@/content/hero";
import { RocketIllustration } from "@/components/illustrations";

const eventIcons = {
  calendar: CalendarIcon,
  clock: ClockIcon,
  location: LocationIcon,
} satisfies Record<
  HeroEventIcon,
  React.ComponentType<{ className?: string }>
>;

export function Hero() {
  const { h1, subtitle, eventInformation, cta } = heroContent;

  return (
    <section className="relative overflow-hidden bg-[#f6f6f7]">
      <Container className="relative pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="relative grid items-start gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(460px,1.04fr)] lg:gap-4 xl:gap-12">
          <div className="relative z-10 animate-fade-up lg:pt-12">
            <h1 className="max-w-[760px] text-[clamp(2rem,9vw,5.8rem)] font-bold leading-[1.04] tracking-[-0.055em] text-brand-purple">
              {h1.split("AI").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <SparkleHeading>AI</SparkleHeading>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
            </h1>

            <p className="mt-7 max-w-[760px] text-base leading-[1.55] text-brand-purple md:text-xl lg:text-[1.35rem]">
              {subtitle}
            </p>

            <div className="mt-8">
              <h2 className="sr-only">{eventInformation.heading}</h2>
              <ul className="flex max-w-[820px] flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
                {eventInformation.items.map(({ icon, label }) => {
                  const Icon = eventIcons[icon];
                  return (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 text-sm font-semibold text-brand-purple md:text-base"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-brand-purple" />
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-9">
              <Button href="#flowi">{cta}</Button>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:-mr-10 lg:justify-end xl:-mr-16">
            <RocketIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}
