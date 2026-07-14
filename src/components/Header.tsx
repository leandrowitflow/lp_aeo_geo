import { Button, containerClass } from "@/components/ui";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-purple/8 bg-white/90 backdrop-blur-md">
      <div
        className={`${containerClass} flex items-center justify-between py-4`}
      >
        <a href="#" className="flex items-center">
          <Logo priority className="h-9 w-auto sm:h-10" />
        </a>
        <Button
          href="https://luma.com/i9pt1a6j"
          className="px-3 py-2 text-[11px] sm:px-6 sm:py-2.5 sm:text-xs"
        >
          <span className="sm:hidden">Register</span>
          <span className="hidden sm:inline">Reserve your place</span>
        </Button>
      </div>
    </header>
  );
}
