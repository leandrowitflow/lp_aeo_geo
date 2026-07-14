import Image from "next/image";
import { SectionLabel, SectionShell } from "@/components/ui";

const partners = [
  {
    src: "/images/Ativo-66@2x-1024x294 1.png",
    alt: "Algarve STP — 20 anos",
    width: 1024,
    height: 294,
    className: "h-12 w-auto sm:h-14 md:h-16",
  },
  {
    src: "/images/IPBN_logo 1.png",
    alt: "Ireland Portugal Business Network",
    width: 640,
    height: 200,
    className: "h-14 w-auto sm:h-16 md:h-[4.5rem]",
  },
] as const;

export function Partners() {
  return (
    <SectionShell className="bg-brand-gray">
      <div className="mx-auto max-w-4xl text-center">
        <SectionLabel className="text-center">In partnership with</SectionLabel>

        <div className="mt-8 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-14 md:gap-20">
          {partners.map((partner) => (
            <div
              key={partner.src}
              className="flex items-center justify-center px-2"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className={partner.className}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
