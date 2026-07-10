import { SectionHeading, SectionShell } from "@/components/ui";

const speakers = [
  {
    name: "Carlos Justino",
    role: "Head of AI & Growth",
    company: "Flow Productions",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "José Carvalho",
    role: "CXO & UI Designer",
    company: "Flow Productions",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Mariana Rocha",
    role: "Head of Marketing & Communications",
    company: "Flow Productions",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
  },
];

export function PanelDiscussion() {
  return (
    <SectionShell className="bg-brand-gray-warm">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading className="mb-7">Panel Discussion</SectionHeading>

        <p className="mx-auto mb-16 max-w-3xl text-lg leading-[1.75] text-brand-text-muted md:text-xl">
          This won&apos;t be another one-hour PowerPoint presentation. Instead,
          we&apos;re bringing together industry specialists for an open
          discussion where you&apos;ll be encouraged to ask questions, share
          your perspective and explore real website examples.
        </p>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="group text-center">
              <div className="relative mx-auto mb-6 aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-[1.75rem] shadow-xl shadow-brand-purple/15 transition-transform duration-300 group-hover:-translate-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-extrabold text-brand-purple">
                {speaker.name}
              </h3>
              <p className="mt-1.5 text-sm font-semibold leading-snug text-brand-text-muted">
                {speaker.role}
              </p>
              <p className="text-sm text-brand-purple-light">{speaker.company}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
