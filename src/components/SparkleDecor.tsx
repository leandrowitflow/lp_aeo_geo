import Image from "next/image";

type SparkleDecorProps = {
  className?: string;
};

export function SparkleDecor({ className = "" }: SparkleDecorProps) {
  return (
    <Image
      src="/images/hero/sparkles.png"
      alt=""
      width={80}
      height={80}
      aria-hidden="true"
      className={className}
    />
  );
}
