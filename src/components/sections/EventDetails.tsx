import {
  CalendarIcon,
  ClockIcon,
  CoffeeIcon,
  LocationIcon,
  MonitorIcon,
} from "@/components/Icons";
import { Button, SectionHeading, SectionShell } from "@/components/ui";

const details = [
  { icon: CalendarIcon, label: "22 July 2026" },
  { icon: ClockIcon, label: "3:00 PM" },
  { icon: LocationIcon, label: "UAlg TEC Campus" },
  { icon: MonitorIcon, label: "Attend in person or online" },
  { icon: CoffeeIcon, label: "Networking & Coffee Break after the session" },
];

export function EventDetails() {
  return (
    <SectionShell id="register" className="bg-brand-gray">
      <div className="mx-auto max-w-6xl">
        <SectionHeading className="mb-14 text-center">Event Details</SectionHeading>

        <div className="flex flex-col items-center gap-14">
          <ul className="flex w-fit max-w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8 lg:flex-nowrap lg:gap-x-10">
            {details.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 text-base font-semibold text-brand-purple md:text-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-brand-purple" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <Button href="https://luma.com/i9pt1a6j">
            Reserve your place for free
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
