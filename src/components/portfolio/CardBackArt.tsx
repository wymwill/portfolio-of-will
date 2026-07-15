export function CardBackArt() {
  return (
    <svg viewBox="0 0 80 120" className="h-full w-full" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="73"
        height="113"
        rx="5"
        fill="none"
        stroke="var(--brass)"
        strokeWidth="1"
        opacity="0.9"
      />
      <rect
        x="7"
        y="7"
        width="66"
        height="106"
        rx="3"
        fill="none"
        stroke="var(--brass)"
        strokeWidth="0.5"
        opacity="0.55"
      />

      <CornerGear cx={12} cy={12} />
      <CornerGear cx={68} cy={12} />
      <CornerGear cx={12} cy={108} />
      <CornerGear cx={68} cy={108} />

      <g stroke="var(--brass)" strokeWidth="0.7" fill="none" opacity="0.85">
        <path d="M40 16 L43 24 L40 30 L37 24 Z" fill="var(--brass)" fillOpacity="0.25" />
        <path d="M40 104 L43 96 L40 90 L37 96 Z" fill="var(--brass)" fillOpacity="0.25" />
        <line x1="40" y1="30" x2="40" y2="36" />
        <line x1="40" y1="84" x2="40" y2="90" />
      </g>

      <g>
        <circle
          cx="40"
          cy="60"
          r="24"
          fill="none"
          stroke="var(--brass)"
          strokeWidth="0.6"
          strokeDasharray="2 3"
          opacity="0.7"
        />
        <circle cx="40" cy="60" r="19" fill="none" stroke="var(--brass)" strokeWidth="0.9" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="40"
            y1="38.5"
            x2="40"
            y2="41"
            stroke="var(--brass)"
            strokeWidth="1.6"
            transform={`rotate(${i * 30} 40 60)`}
          />
        ))}
        <g fill="var(--brass)" fillOpacity="0.85" stroke="var(--brass-bright)" strokeWidth="0.3">
          <polygon points="40,44 42.5,57.5 40,60 37.5,57.5" />
          <polygon points="40,76 42.5,62.5 40,60 37.5,62.5" />
          <polygon points="24,60 37.5,62.5 40,60 37.5,57.5" />
          <polygon points="56,60 42.5,62.5 40,60 42.5,57.5" />
        </g>
        <g fill="var(--brass)" fillOpacity="0.5">
          <polygon points="30,50 38,58 40,60 36,56" />
          <polygon points="50,50 42,58 40,60 44,56" />
          <polygon points="30,70 38,62 40,60 36,64" />
          <polygon points="50,70 42,62 40,60 44,64" />
        </g>
        <circle cx="40" cy="60" r="3.2" fill="var(--brass-bright)" />
        <circle cx="40" cy="60" r="1.4" fill="var(--arcane-bright)" />
      </g>

      <g fill="var(--brass-bright)" opacity="0.7">
        <path d="M20 34 l1 2 l2 1 l-2 1 l-1 2 l-1 -2 l-2 -1 l2 -1 Z" />
        <path d="M60 86 l1 2 l2 1 l-2 1 l-1 2 l-1 -2 l-2 -1 l2 -1 Z" />
      </g>
    </svg>
  );
}

function CornerGear({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="4"
        fill="none"
        stroke="var(--brass)"
        strokeWidth="0.8"
        opacity="0.9"
      />
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy - 4}
          x2={cx}
          y2={cy - 5.5}
          stroke="var(--brass)"
          strokeWidth="1"
          transform={`rotate(${i * 45} ${cx} ${cy})`}
          opacity="0.9"
        />
      ))}
      <circle cx={cx} cy={cy} r="1.3" fill="var(--brass)" opacity="0.9" />
    </g>
  );
}
