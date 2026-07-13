import Image from "next/image";
import { SparkleDecor } from "@/components/SparkleDecor";
import { SectionHeading, SectionLabel, SectionShell } from "@/components/ui";
import { panelContent, type PanelPerson } from "@/content/panel";

type PanelPersonCardProps = {
  person: PanelPerson;
  badge?: string;
};

function PanelPersonCard({ person, badge }: PanelPersonCardProps) {
  const photoFocus =
    "photoFocus" in person
      ? person.photoFocus
      : { scale: 1.2, objectPosition: "50% 22%" };

  return (
    <article className="group text-center">
      <div className="relative mx-auto mb-6 aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-[1.75rem] shadow-xl shadow-brand-purple/15 transition-transform duration-300 group-hover:-translate-y-1">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="(max-width: 640px) 50vw, 480px"
          quality={90}
          className="object-cover"
          style={{
            objectPosition: photoFocus.objectPosition,
            transform: `scale(${photoFocus.scale})`,
            transformOrigin: photoFocus.objectPosition,
          }}
        />
      </div>

      {badge ? (
        <p className="mb-2 inline-flex rounded-full bg-brand-purple px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
          {badge}
        </p>
      ) : null}

      <h3 className="text-xl font-extrabold text-brand-purple">{person.name}</h3>
      <p className="mt-1.5 text-sm font-semibold leading-snug text-brand-text-muted">
        {person.role}
      </p>
      <p className="text-sm text-brand-purple-light">{person.company}</p>
    </article>
  );
}

export function PanelDiscussion() {
  const { heading, description, host, speakers } = panelContent;

  return (
    <SectionShell className="bg-brand-gray-warm">
      <div className="relative mx-auto max-w-6xl text-center">
        <SparkleDecor className="pointer-events-none absolute left-0 top-0 hidden h-10 w-10 lg:block" />
        <SectionHeading className="mb-7">{heading}</SectionHeading>

        <p className="mx-auto mb-16 max-w-3xl text-lg leading-[1.75] text-brand-text-muted md:text-xl">
          {description}
        </p>

        <div className="mx-auto max-w-md">
          <SectionLabel>{host.label}</SectionLabel>
          <p className="mb-8 text-sm leading-relaxed text-brand-text-muted md:text-base">
            {host.note}
          </p>
          <PanelPersonCard person={host} badge={host.label} />
        </div>

        <div className="mx-auto my-14 h-px w-full max-w-3xl bg-brand-purple/15" />

        <div>
          <SectionLabel className="mb-10">{speakers.label}</SectionLabel>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {speakers.people.map((speaker) => (
              <PanelPersonCard key={speaker.name} person={speaker} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
