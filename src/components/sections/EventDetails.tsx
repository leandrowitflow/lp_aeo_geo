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

const detailColumns = [details.slice(0, 3), details.slice(3)];

export function EventDetails() {
  return (
    <SectionShell id="register" className="bg-brand-gray">
      <div className="mx-auto max-w-4xl">
        <SectionHeading className="mb-14 text-center">Event Details</SectionHeading>

        <div className="flex flex-col items-center gap-14">
          <div className="grid w-fit max-w-full gap-6 text-left md:grid-cols-2 md:gap-x-16">
            {detailColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-6">
                {column.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 text-lg font-semibold text-brand-purple"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon className="h-5 w-5 text-brand-purple" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <Button href="#flowi">Reserve your place for free</Button>
        </div>
      </div>
    </SectionShell>
  );
}
