import Image from "next/image";
import { SparkleDecor } from "./SparkleDecor";

const heroImages = {
  rocket: "/images/hero/rocket.png",
} as const;
export function RocketIllustration() {
  return (
    <div
      className="relative mx-auto w-full max-w-[660px]"
      aria-hidden="true"
    >
      <Image
        src={heroImages.rocket}
        alt=""
        width={768}
        height={960}
        priority
        className="h-auto w-full drop-shadow-[0_18px_28px_rgba(92,84,160,0.08)]"
      />
    </div>
  );
}

export function FlowiOrb() {
  return (
    <div className="relative mx-auto mb-10 flex h-28 w-28 items-center justify-center">
      <Image
        src="/images/flowi-avatar.png"
        alt="Flowi"
        width={112}
        height={112}
        className="h-28 w-28 rounded-full object-cover shadow-2xl shadow-brand-purple/30"
      />
      <SparkleDecor className="absolute -right-2 -top-1 h-8 w-8" />
    </div>
  );
}
