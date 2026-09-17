export function RotaPucLogo() {
  return (
    <span className="flex items-center gap-2.5" aria-label="RotaPUC">
      <svg
        viewBox="0 0 58 40"
        className="h-10 w-[58px] shrink-0"
        role="img"
        aria-hidden="true"
      >
        <circle cx="8" cy="32" r="5.5" fill="currentColor" />
        <circle cx="17" cy="23" r="1.8" fill="currentColor" />
        <circle cx="25" cy="16" r="1.8" fill="currentColor" />
        <circle cx="34" cy="11" r="1.8" fill="currentColor" />
        <path d="M43 3v17" stroke="currentColor" strokeWidth="2" />
        <path d="M44 4 55 10 44 16Z" className="fill-brand-yellow" />
      </svg>
      <span className="text-lg font-bold text-brand-dark">
        Rota<span className="text-brand-yellow">PUC</span>
      </span>
    </span>
  );
}