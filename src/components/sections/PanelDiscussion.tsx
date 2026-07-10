import Image from "next/image";
import { SparkleDecor } from "@/components/SparkleDecor";
import { SectionHeading, SectionShell } from "@/components/ui";
import { panelContent } from "@/content/panel";

export function PanelDiscussion() {
  const { heading, description, speakers } = panelContent;

  return (
    <SectionShell className="bg-brand-gray-warm">
      <div className="relative mx-auto max-w-6xl text-center">
        <SparkleDecor className="pointer-events-none absolute left-0 top-0 hidden h-10 w-10 lg:block" />
        <SectionHeading className="mb-7">{heading}</SectionHeading>

        <p className="mx-auto mb-16 max-w-3xl text-lg leading-[1.75] text-brand-text-muted md:text-xl">
          {description}
        </p>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="group text-center">
              <div className="relative mx-auto mb-6 aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-[1.75rem] shadow-xl shadow-brand-purple/15 transition-transform duration-300 group-hover:-translate-y-1">
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 480px"
                  quality={90}
                  className="object-cover object-top"
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
