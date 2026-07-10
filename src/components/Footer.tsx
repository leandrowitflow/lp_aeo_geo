import { containerClass } from "@/components/ui";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-brand-purple/8 bg-white py-10">
      <div
        className={`${containerClass} flex flex-col items-center gap-3 text-center`}
      >
        <Logo className="h-8 w-auto opacity-90" />
        <p className="text-sm text-brand-text-muted">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
