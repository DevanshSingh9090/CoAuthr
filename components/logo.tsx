type LogoProps = {
  /** Extra classes for the outer wrapper */
  className?: string;
  /** Show the "Coauthr" wordmark next to the mark */
  showText?: boolean;
  /** Extra classes for the wordmark, e.g. "hidden md:inline" to hide it on phones */
  textClassName?: string;
};

/**
 * Coauthr brand logo.
 * Two overlapping circles = two co-authors writing together;
 * the amber dot is the shared moment where their work meets.
 *
 * The green tile is a normal element with a CSS gradient (not an SVG <defs>
 * gradient), so several logos can sit on one page, even inside hidden
 * containers, without borrowing each other's gradient by id.
 */
const Logo = ({
  className = "",
  showText = true,
  textClassName = "",
}: LogoProps) => {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="gradient-brand flex size-8 shrink-0 items-center justify-center rounded-[10px]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12.5" cy="16" r="6" stroke="#fff" strokeWidth="2" />
          <circle cx="19.5" cy="16" r="6" stroke="#fff" strokeWidth="2" />
          <circle cx="16" cy="16" r="2" fill="#F5B544" />
        </svg>
      </span>

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
