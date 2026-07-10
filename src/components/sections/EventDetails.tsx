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
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading className="mb-14">Event Details</SectionHeading>

        <ul className="space-y-6">
          {details.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-4 text-lg font-semibold text-brand-purple"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Icon className="h-5 w-5 text-brand-purple" />
              </span>
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <Button href="#flowi">Reserve your place for free</Button>
        </div>
      </div>
    </SectionShell>
  );
}
