import { SparkleDecor } from "./SparkleDecor";

export const containerClass =
  "mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-14";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`${containerClass} ${className}`}>{children}</div>;
}

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

export function Button({
  children,
  href = "#register",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-9 py-4 text-[15px] font-bold tracking-wide transition-all duration-300";
  const variants = {
    primary:
      "bg-brand-purple text-white shadow-xl shadow-brand-purple/30 hover:-translate-y-0.5 hover:bg-brand-purple-dark hover:shadow-brand-purple/40",
    outline:
      "border-2 border-brand-purple/30 bg-white text-brand-purple hover:border-brand-purple hover:bg-brand-purple-pale",
    ghost:
      "bg-white text-brand-purple shadow-lg shadow-brand-purple/10 hover:-translate-y-0.5 hover:bg-brand-yellow hover:shadow-brand-yellow/30",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag
      className={`text-[2rem] font-extrabold leading-[1.15] tracking-tight text-brand-purple md:text-[2.5rem] lg:text-[2.75rem] ${className}`}
    >
      {children}
    </Tag>
  );
}

export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-purple-light ${className}`}
    >
      {children}
    </p>
  );
}

export function SparkleHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <SparkleDecor className="absolute -right-10 -top-4 h-8 w-8 md:-right-12 md:-top-5 md:h-10 md:w-10" />
    </span>
  );
}

export function SectionShell({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
