type LogoProps = {
  /** Extra classes for the outer wrapper */
  className?: string;
  /** Show the "Coauthr" wordmark next to the mark */
  showText?: boolean;
  /** Extra classes for the wordmark, e.g. "hidden md:inline" to hide it on phones */
  textClassName?: string;
};

/**
 * Coauthr brand logo, drawn as inline SVG.
 * Two overlapping circles = two co-authors writing together;
 * the amber dot is the shared moment where their work meets.
 */
const Logo = ({
  className = "",
  showText = true,
  textClassName = "",
}: LogoProps) => {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id="coauthr-mark"
            x1="4"
            y1="2"
            x2="28"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2DCB9B" />
            <stop offset="1" stopColor="#0A7D5C" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="10" fill="url(#coauthr-mark)" />
        <circle cx="12.5" cy="16" r="6" stroke="#fff" strokeWidth="2" />
        <circle cx="19.5" cy="16" r="6" stroke="#fff" strokeWidth="2" />
        <circle cx="16" cy="16" r="2" fill="#F5B544" />
      </svg>

      {showText && (
        <span
          className={`text-xl font-bold tracking-tight text-white ${textClassName}`}
        >
          Co<span className="text-brand-400">authr</span>
        </span>
      )}
    </span>
  );
};

export default Logo;