type SparklesProps = {
  className?: string;
};

export function Sparkles({ className = "" }: SparklesProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
      <path
        d="M20 2L20.8 5.2L24 6L20.8 6.8L20 10L19.2 6.8L16 6L19.2 5.2L20 2Z"
        opacity="0.7"
      />
    </svg>
  );
}
