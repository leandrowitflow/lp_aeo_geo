import Image from "next/image";
import { SparkleDecor } from "@/components/SparkleDecor";

export function MagnifyingGlassDivider() {
  return (
    <div className="relative z-20 h-0 bg-white" aria-hidden="true">
      <Image
        src="/images/hero/magnifying-glass.png"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute -left-20 -top-32 hidden h-72 w-auto max-w-none lg:block xl:h-80"
      />
      <SparkleDecor className="pointer-events-none absolute left-60 -top-20 hidden h-12 w-12 lg:block xl:left-64" />
    </div>
  );
}
