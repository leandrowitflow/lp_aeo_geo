export function Footer() {
  return (
    <footer className="border-t border-brand-purple/8 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center lg:px-10">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purple text-xs font-extrabold text-white">
            F
          </span>
          <span className="text-sm font-bold tracking-wide text-brand-purple">
            FLOW PRODUCTIONS
          </span>
        </div>
        <p className="text-sm text-brand-text-muted">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
