type IconProps = { className?: string };

export function ModulesIcon({ className = "size-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        d="M8 13.5 16 9l8 4.5-8 4.5-8-4.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 17.5 16 22l8-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M8 21.5 16 26l8-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LessonsIcon({ className = "size-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <circle
        cx="16"
        cy="16"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 12.2v7.6L20.2 16 14 12.2Z" fill="currentColor" />
    </svg>
  );
}

export function PriceIcon({ className = "size-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16 10.2v11.6M13.1 13.1c.5-.9 1.5-1.4 2.9-1.4 1.7 0 2.7.8 2.7 2.1s-1 1.9-3 2.2-2.9.7-2.9 2.2 1.2 2.2 3 2.2c1.3 0 2.3-.5 2.9-1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChecksIcon({ className = "size-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <circle
        cx="16"
        cy="16"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m11.5 16.2 3 3.1 6.2-6.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScoreboardIcon({ className = "size-[4.5rem]" }: IconProps) {
  return (
    <svg viewBox="0 0 72 64" aria-hidden="true" className={className}>
      <rect
        x="4"
        y="8"
        width="64"
        height="48"
        rx="8"
        fill="none"
        stroke="#123B32"
        strokeWidth="2.4"
      />
      <path d="M36 10v44" stroke="#123B32" strokeWidth="2.2" />
      <text
        x="20"
        y="38"
        textAnchor="middle"
        fill="#123B32"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontSize="18"
        fontWeight="700"
      >
        11
      </text>
      <text
        x="52"
        y="38"
        textAnchor="middle"
        fill="#123B32"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontSize="18"
        fontWeight="700"
      >
        7
      </text>
    </svg>
  );
}

export function PaddleIcon({ className = "size-[4.5rem]" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={className}>
      <g transform="rotate(-18 36 34)">
        <ellipse
          cx="34"
          cy="30"
          rx="16"
          ry="22"
          fill="#F8F9F3"
          stroke="#123B32"
          strokeWidth="2.3"
        />
        {[
          [28, 22],
          [36, 22],
          [28, 30],
          [36, 30],
          [32, 26],
          [32, 36],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" fill="#123B32" />
        ))}
        <path
          d="M31 50h6c1.2 0 2 1.4 1.4 2.6l-2.2 8.2c-.3.8-1.4 1.2-2.2.8l-3.6-2.2c-.7-.4-.8-1.3-.4-2L31 50Z"
          fill="#123B32"
        />
      </g>
      <circle cx="60" cy="56" r="9" fill="#C5F344" stroke="#123B32" strokeWidth="2" />
      <path
        d="M55 56.5c2.2-2.4 6.4-2.6 9-.6"
        fill="none"
        stroke="#123B32"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CourtShoe({ lime = false }: { lime?: boolean }) {
  return (
    <g>
      <path
        d="M0-17.5c8.2 0 12.2 7.2 12.2 15.2 0 6.4-3.2 12.2-7.4 15.2-1.5 1-3.4 1.6-4.8 1.6s-3.3-.6-4.8-1.6C-9 10-12.2 4.1-12.2-2.3-12.2-10.3-8.2-17.5 0-17.5Z"
        fill={lime ? "#C5F344" : "#F8F9F3"}
        stroke="#123B32"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M-7.2-1.5h14.4M-6.4 4.2h12.8M-5.4 9.6h10.8"
        fill="none"
        stroke="#123B32"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  );
}

export function FootworkIcon({ className = "size-[4.5rem]" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={className}>
      <path
        d="M15 20c10-8 30-9 46 1"
        fill="none"
        stroke="#123B32"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M53.5 13.2 64.2 21l-10.2 3.4"
        fill="#C5F344"
        stroke="#123B32"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <g transform="translate(28 50) rotate(-16)">
        <CourtShoe />
      </g>
      <g transform="translate(52 48) rotate(14)">
        <CourtShoe lime />
      </g>
    </svg>
  );
}

export function BasketIcon({ className = "size-[4.5rem]" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={className}>
      <circle cx="28" cy="24" r="7" fill="#C5F344" stroke="#123B32" strokeWidth="1.7" />
      <circle cx="40" cy="20" r="7" fill="#D7F07A" stroke="#123B32" strokeWidth="1.7" />
      <circle cx="52" cy="24" r="7" fill="#C5F344" stroke="#123B32" strokeWidth="1.7" />
      <path
        d="M18 34h44l-6 28H24L18 34Z"
        fill="#F8F9F3"
        stroke="#123B32"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M28 34v28M40 34v28M52 34v28" stroke="#123B32" strokeWidth="1.5" />
      <path d="M20 44h40M21.5 54h37" stroke="#123B32" strokeWidth="1.5" />
    </svg>
  );
}

export function LessonCardIcon({ className = "size-[4.5rem]" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={className}>
      <rect x="14" y="10" width="52" height="60" rx="8" fill="#F8F9F3" stroke="#123B32" strokeWidth="2.3" />
      <rect x="14" y="10" width="52" height="16" rx="8" fill="#C5F344" stroke="#123B32" strokeWidth="2.3" />
      <path d="M14 22h52" stroke="#123B32" strokeWidth="2.3" />
      <path d="M24 38h32M24 48h24M24 58h18" stroke="#123B32" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function QuizCardIcon({ className = "size-[4.5rem]" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={className}>
      <rect x="12" y="12" width="56" height="56" rx="10" fill="#F8F9F3" stroke="#123B32" strokeWidth="2.3" />
      {[28, 40, 52].map((y, index) => (
        <g key={y}>
          <rect x="22" y={y - 6} width="12" height="12" rx="3" fill="#C5F344" stroke="#123B32" strokeWidth="1.7" />
          {index < 2 ? (
            <path
              d={`M${24.5} ${y} l2.2 2.2 4-4.2`}
              fill="none"
              stroke="#123B32"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}
          <path d={`M40 ${y}h16`} stroke="#123B32" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

export function InfoIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 11v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

export function LightbulbIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M9 17h6M10 20h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 14a5.5 5.5 0 1 1 8 0c-.7.7-1.2 1.4-1.4 2.2H9.4C9.2 15.4 8.7 14.7 8 14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        d="m3 8.2 3.1 3.2L13 4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
