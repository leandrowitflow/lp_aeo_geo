import { Sparkles } from "./Sparkles";

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
      <Sparkles className="absolute -right-7 -top-3 h-5 w-5 text-brand-yellow md:-right-9 md:-top-4 md:h-7 md:w-7" />
      <Sparkles className="absolute -right-12 top-1 h-3 w-3 text-brand-yellow-light md:-right-16 md:top-0 md:h-4 md:w-4" />
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
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}
