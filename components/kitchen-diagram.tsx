export function KitchenDiagram({ className = "" }: { className?: string }) {
  const x = 36;
  const y = 28;
  const w = 640;
  const h = 250;
  const kitchen = (w / 44) * 7;
  const net = x + w / 2;

  return (
    <svg
      viewBox="0 0 712 340"
      role="img"
      aria-label="Top-down court with the non-volley zone highlighted on both sides of the net."
      className={`h-auto w-full ${className}`}
    >
      <rect x={x} y={y} width={w} height={h} rx="8" fill="#1F7D64" />
      <rect x={net - kitchen} y={y} width={kitchen} height={h} fill="#D5F07A" />
      <rect x={net} y={y} width={kitchen} height={h} fill="#D5F07A" />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3"
      />
      <line
        x1={net - kitchen}
        y1={y}
        x2={net - kitchen}
        y2={y + h}
        stroke="#FFFFFF"
        strokeWidth="2.5"
      />
      <line
        x1={net + kitchen}
        y1={y}
        x2={net + kitchen}
        y2={y + h}
        stroke="#FFFFFF"
        strokeWidth="2.5"
      />
      <line x1={net} y1={y} x2={net} y2={y + h} stroke="#FFFFFF" strokeWidth="4" />
      <line
        x1={x}
        y1={y + h / 2}
        x2={net - kitchen}
        y2={y + h / 2}
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <line
        x1={net + kitchen}
        y1={y + h / 2}
        x2={x + w}
        y2={y + h / 2}
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <text
        x={net - kitchen / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#123B32"
        fontSize="15"
        fontWeight="700"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        Non-volley
      </text>
      <text
        x={net - kitchen / 2}
        y={y + h / 2 + 18}
        textAnchor="middle"
        fill="#123B32"
        fontSize="15"
        fontWeight="700"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        zone
      </text>
      <text
        x={net + kitchen / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#123B32"
        fontSize="15"
        fontWeight="700"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        Non-volley
      </text>
      <text
        x={net + kitchen / 2}
        y={y + h / 2 + 18}
        textAnchor="middle"
        fill="#123B32"
        fontSize="15"
        fontWeight="700"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        zone
      </text>
      <path
        d={`M ${net - kitchen} 292 H ${net + kitchen}`}
        fill="none"
        stroke="#123B32"
        strokeWidth="1.6"
      />
      <path
        d={`M ${net - kitchen} 286 v12 M ${net + kitchen} 286 v12`}
        fill="none"
        stroke="#123B32"
        strokeWidth="1.6"
      />
      <text
        x={net}
        y="318"
        textAnchor="middle"
        fill="#123B32"
        fontSize="14"
        fontWeight="600"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        The kitchen (non-volley zone)
      </text>
    </svg>
  );
}
