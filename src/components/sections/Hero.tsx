import { Button, SparkleHeading } from "@/components/ui";
import { CalendarIcon, ClockIcon, LocationIcon } from "@/components/Icons";
import { MagnifyingGlass, RocketIllustration } from "@/components/illustrations";

const eventMeta = [
  { icon: CalendarIcon, label: "22 July 2026" },
  { icon: ClockIcon, label: "3:00 PM" },
  { icon: LocationIcon, label: "UAlg TEC Campus" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-purple-pale/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-14">
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          <MagnifyingGlass />

          <div className="relative z-10 animate-fade-up lg:pl-4 xl:pl-8">
            <h1 className="max-w-xl text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-brand-purple md:text-5xl lg:text-[3.4rem]">
              Why Isn&apos;t{" "}
              <SparkleHeading>AI</SparkleHeading> Recommending Your Business?
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-[1.7] text-brand-text-muted md:text-xl">
              Discover how to prepare your website to be found, understood and
              recommended by search engines and AI-powered platforms.
            </p>

            <ul className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {eventMeta.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-[15px] font-semibold text-brand-purple"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-purple-pale">
                    <Icon className="h-4 w-4 text-brand-purple" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Button href="#register">Reserve your place</Button>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end lg:pr-4">
            <RocketIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
