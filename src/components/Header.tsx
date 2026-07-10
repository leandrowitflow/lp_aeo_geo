import { Button } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-purple/8 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-purple text-sm font-extrabold tracking-tight text-white">
            F
          </span>
          <span className="text-sm font-bold tracking-wide text-brand-purple">
            FLOW PRODUCTIONS
          </span>
        </a>
        <Button href="#register" className="hidden px-6 py-2.5 text-xs sm:inline-flex">
          Reserve your place
        </Button>
      </div>
    </header>
  );
}
