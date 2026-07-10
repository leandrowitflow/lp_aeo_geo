import { Sparkles } from "./Sparkles";

export function MagnifyingGlass() {
  return (
    <div
      className="pointer-events-none absolute -left-24 top-1/2 z-0 hidden -translate-y-1/2 lg:block xl:-left-16"
      aria-hidden="true"
    >
      <Sparkles className="absolute right-6 top-4 z-10 h-7 w-7 text-brand-yellow" />
      <Sparkles className="absolute right-14 top-16 h-4 w-4 text-brand-yellow-light" />
      <div className="grain relative">
        <svg
          viewBox="0 0 280 280"
          className="h-64 w-64 text-brand-purple xl:h-72 xl:w-72"
          fill="currentColor"
        >
          <defs>
            <filter id="mgGrain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.7"
                numOctaves="3"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="3"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <g filter="url(#mgGrain)" opacity="0.95">
            <circle
              cx="110"
              cy="110"
              r="72"
              fill="none"
              stroke="currentColor"
              strokeWidth="22"
            />
            <rect
              x="158"
              y="158"
              width="95"
              height="28"
              rx="14"
              transform="rotate(45 158 158)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function RocketIllustration() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg animate-float"
      aria-hidden="true"
    >
      <div className="absolute -right-4 -top-2 z-20 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-brand-yellow text-center shadow-2xl shadow-brand-yellow/40 md:-right-6 md:-top-4 md:h-28 md:w-28">
        <span className="px-2 text-[11px] font-extrabold leading-tight text-brand-purple-deep md:text-xs">
          Let Creativity Flow
        </span>
      </div>

      <div className="grain relative">
        <svg viewBox="0 0 360 480" className="h-auto w-full">
          <defs>
            <linearGradient id="rocketBody" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#9b93e8" />
              <stop offset="45%" stopColor="#7b72de" />
              <stop offset="100%" stopColor="#5b52c8" />
            </linearGradient>
            <linearGradient id="rocketFin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6b5fd4" />
              <stop offset="100%" stopColor="#4a3d9e" />
            </linearGradient>
            <filter id="rocketGrain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="4"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="4"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
            <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffe566" />
              <stop offset="100%" stopColor="#f5c518" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g filter="url(#rocketGrain)">
            <ellipse cx="180" cy="455" rx="60" ry="25" fill="url(#flameGlow)" />
            <ellipse cx="180" cy="440" rx="38" ry="18" fill="#f5c518" opacity="0.7" />
            <ellipse cx="180" cy="430" rx="24" ry="12" fill="#ffe566" />

            <path
              d="M180 35 C235 85 260 200 252 340 L108 340 C100 200 125 85 180 35Z"
              fill="url(#rocketBody)"
            />

            <path d="M108 320 L50 400 L108 355Z" fill="url(#rocketFin)" />
            <path d="M252 320 L310 400 L252 355Z" fill="url(#rocketFin)" />

            <path
              d="M180 35 C160 55 160 78 180 98 C200 78 200 55 180 35Z"
              fill="#f5c518"
            />

            <ellipse cx="180" cy="175" rx="42" ry="48" fill="white" opacity="0.95" />
            <ellipse cx="180" cy="175" rx="30" ry="34" fill="#e4e0f8" />

            <rect x="148" y="255" width="64" height="52" rx="6" fill="#5649b8" opacity="0.5" />
            <text
              x="180"
              y="282"
              textAnchor="middle"
              fill="white"
              fontSize="26"
              fontWeight="800"
              fontFamily="sans-serif"
              letterSpacing="2"
            >
              FLOW
            </text>
            <text
              x="180"
              y="302"
              textAnchor="middle"
              fill="white"
              fontSize="9"
              fontWeight="600"
              fontFamily="sans-serif"
              letterSpacing="3"
              opacity="0.9"
            >
              PRODUCTIONS
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function FlowiOrb() {
  return (
    <div
      className="relative mx-auto mb-10 flex h-28 w-28 items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute inset-0 animate-pulse rounded-full bg-brand-purple/15" />
      <div className="grain relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-deep shadow-2xl shadow-brand-purple/40">
        <span className="text-2xl font-extrabold text-white">F</span>
      </div>
      <Sparkles className="absolute -right-1 top-0 h-5 w-5 text-brand-yellow" />
    </div>
  );
}
