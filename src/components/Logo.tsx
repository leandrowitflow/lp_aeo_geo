import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-9 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/logos/Logo Preto-01.png"
      alt="Flow Productions"
      width={180}
      height={48}
      priority={priority}
      className={className}
    />
  );
}
