type CourtVariant = "overview" | "movement" | "return";

type Point = { x: number; y: number };

const topY = 168;
const botY = 500;
const topL = 268;
const topR = 732;
const botL = 168;
const botR = 812;

const netT = 0.48;
const netGap = 0.02;
const kitchenDepth = 0.108;
const farKitchenT = netT - netGap - kitchenDepth;
const farKitchenInner = netT - netGap;
const nearKitchenInner = netT + netGap;
const nearKitchenT = netT + netGap + kitchenDepth;

function row(t: number) {
  const y = topY + (botY - topY) * t;
  const l = topL + (botL - topL) * t;
  const r = topR + (botR - topR) * t;
  return { y, l, r, cx: (l + r) / 2 };
}

function quad(t1: number, t2: number) {
  const a = row(t1);
  const b = row(t2);
  return `${a.l},${a.y} ${a.r},${a.y} ${b.r},${b.y} ${b.l},${b.y}`;
}

function spot(t: number, align: number): Point {
  const line = row(t);
  return { x: line.l + (line.r - line.l) * align, y: line.y };
}

function sub(a: Point, b: Point): Point {
  return { x: a.x - b.x, y: a.y - b.y };
}

function add(a: Point, b: Point): Point {
  return { x: a.x + b.x, y: a.y + b.y };
}

function mul(a: Point, n: number): Point {
  return { x: a.x * n, y: a.y * n };
}

function len(a: Point) {
  return Math.hypot(a.x, a.y);
}

function norm(a: Point): Point {
  const size = len(a) || 1;
  return { x: a.x / size, y: a.y / size };
}

function roundedPolygon(points: Point[], radius: number) {
  const count = points.length;
  let d = "";
  for (let i = 0; i < count; i += 1) {
    const prev = points[(i + count - 1) % count];
    const curr = points[i];
    const next = points[(i + 1) % count];
    const toPrev = norm(sub(prev, curr));
    const toNext = norm(sub(next, curr));
    const cut = Math.min(radius, len(sub(prev, curr)) * 0.42, len(sub(next, curr)) * 0.42);
    const start = add(curr, mul(toPrev, cut));
    const end = add(curr, mul(toNext, cut));
    d += i === 0 ? `M ${start.x} ${start.y}` : ` L ${start.x} ${start.y}`;
    d += ` Q ${curr.x} ${curr.y} ${end.x} ${end.y}`;
  }
  return `${d} Z`;
}

function expand(points: Point[], amount: number) {
  const cx = points.reduce((sum, point) => sum + point.x, 0) / points.length;
  const cy = points.reduce((sum, point) => sum + point.y, 0) / points.length;
  return points.map((point) => {
    const direction = norm(sub(point, { x: cx, y: cy }));
    return add(point, mul(direction, amount));
  });
}

const courtCorners: Point[] = [
  { x: topL, y: topY },
  { x: topR, y: topY },
  { x: botR, y: botY },
  { x: botL, y: botY },
];

const frame = roundedPolygon(expand(courtCorners, 22), 28);
const lip = roundedPolygon(
  expand(courtCorners, 22).map((point) => ({ x: point.x + 8, y: point.y + 12 })),
  28,
);
const surface = roundedPolygon(courtCorners, 16);

function Person({
  x,
  y,
  scale,
  tone,
}: {
  x: number;
  y: number;
  scale: number;
  tone: "lime" | "team";
}) {
  const fill = tone === "lime" ? "#D7F34A" : "#123B32";
  const stroke = tone === "team" ? "#FFFFFF" : "none";
  const width = tone === "team" ? 2.4 : 0;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-14 8.5c.3-7.4 5.8-11.4 14-11.4s13.7 4 14 11.4c-4 4.4-9 6.2-14 6.2s-10-1.8-14-6.2Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={width}
        strokeLinejoin="round"
      />
      <circle cx="0" cy="-10" r="7.5" fill={fill} stroke={stroke} strokeWidth={width} />
    </g>
  );
}

function Callout({
  x,
  y,
  lines,
  tone = "light",
  width,
}: {
  x: number;
  y: number;
  lines: string[];
  tone?: "light" | "dark";
  width: number;
}) {
  const height = lines.length > 1 ? 64 : 48;
  const fill = tone === "light" ? "#FFFFFF" : "#123B32";
  const ink = tone === "light" ? "#123B32" : "#FFFFFF";
  return (
    <g transform={`translate(${x - width / 2} ${y - height / 2})`} filter="url(#pillShadow)">
      <rect width={width} height={height} rx={height / 2} fill={fill} />
      {lines.map((line, index) => (
        <text
          key={line}
          x={width / 2}
          y={lines.length > 1 ? 26 + index * 20 : height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={ink}
          fontSize={lines.length > 1 && index === 1 ? 13 : 18}
          fontWeight="700"
          style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

const labels = {
  overview:
    "Pickleball court showing opponents, your team, the kitchen, and the baseline.",
  movement: "Pickleball court with a shot path from your team toward the kitchen.",
  return: "Court diagram showing you moving forward after the return.",
};

export function CourtDiagram({
  variant = "overview",
  className = "",
}: {
  variant?: CourtVariant;
  className?: string;
}) {
  const net = row(netT);
  const farCenter = row(0);
  const nearCenter = row(1);
  const oppLeft = spot(farKitchenT * 0.46, 0.27);
  const oppRight = spot(farKitchenT * 0.46, 0.73);
  const teamLeft = spot(nearKitchenT + (1 - nearKitchenT) * 0.42, 0.28);
  const teamRight = spot(nearKitchenT + (1 - nearKitchenT) * 0.42, 0.72);
  const opponentsLabel = { x: farCenter.cx, y: 56 };
  const teamLabel = { x: nearCenter.cx, y: 584 };
  const kitchenLabel = { x: 112, y: net.y + 6 };
  const baselineLabel = { x: 908, y: botY - 28 };
  const netHeight = 14;
  const netTop = net.y - netHeight / 2;
  const nearBand = row((nearKitchenInner + nearKitchenT) / 2);
  const kitchenArrowStart = { x: kitchenLabel.x + 96, y: nearBand.y - 2 };
  const kitchenArrowEnd = { x: nearBand.l + 108, y: nearBand.y + 6 };
  const kitchenArrowControl = {
    x: kitchenArrowEnd.x - 46,
    y: nearBand.y - 8,
  };
  const baselineArrowEnd = { x: botR - 36, y: botY - 4 };
  const baselineArrowStart = { x: baselineLabel.x - 74, y: baselineLabel.y + 14 };
  const baselineArrowControl = { x: botR + 24, y: botY + 36 };

  const shotStart = spot(0.78, 0.68);
  const shotEnd = spot(0.34, 0.4);
  const shotMid = {
    x: (shotStart.x + shotEnd.x) / 2 + 36,
    y: (shotStart.y + shotEnd.y) / 2 - 10,
  };

  return (
    <svg
      viewBox="0 0 1000 640"
      role="img"
      aria-label={labels[variant]}
      className={`h-auto w-full ${className}`}
    >
      <defs>
        <filter id="pillShadow" x="-15%" y="-20%" width="130%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.2" floodColor="#123B32" floodOpacity="0.16" />
        </filter>
        <marker
          id="courtArrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="22"
          markerHeight="22"
          markerUnits="userSpaceOnUse"
          orient="auto"
        >
          <path d="M0 1.2 L9 5 L0 8.8 Z" fill="#FFFFFF" />
        </marker>
      </defs>

      <path d={lip} fill="#0A3C32" />
      <path d={frame} fill="#0F4E40" />
      <path d={surface} fill="#23866B" />
      <polygon points={quad(farKitchenT, farKitchenInner)} fill="#D5F06C" />
      <polygon points={quad(nearKitchenInner, nearKitchenT)} fill="#D5F06C" />
      <path d={surface} fill="none" stroke="#FFFFFF" strokeWidth="4" />
      <line
        x1={row(farKitchenT).l}
        y1={row(farKitchenT).y}
        x2={row(farKitchenT).r}
        y2={row(farKitchenT).y}
        stroke="#FFFFFF"
        strokeWidth="3"
      />
      <line
        x1={row(nearKitchenT).l}
        y1={row(nearKitchenT).y}
        x2={row(nearKitchenT).r}
        y2={row(nearKitchenT).y}
        stroke="#FFFFFF"
        strokeWidth="3"
      />
      <line
        x1={row(0).cx}
        y1={row(0).y}
        x2={row(farKitchenT).cx}
        y2={row(farKitchenT).y}
        stroke="#FFFFFF"
        strokeWidth="3"
      />
      <line
        x1={row(nearKitchenT).cx}
        y1={row(nearKitchenT).y}
        x2={row(1).cx}
        y2={row(1).y}
        stroke="#FFFFFF"
        strokeWidth="3"
      />

      <g>
        <rect
          x={net.l - 5}
          y={netTop - 4}
          width="7"
          height={netHeight + 8}
          rx="1.5"
          fill="#123B32"
        />
        <rect
          x={net.r - 2}
          y={netTop - 4}
          width="7"
          height={netHeight + 8}
          rx="1.5"
          fill="#123B32"
        />
        <rect x={net.l} y={netTop} width={net.r - net.l} height={netHeight} fill="#1A6E5A" />
        <line
          x1={net.l}
          y1={netTop}
          x2={net.r}
          y2={netTop}
          stroke="#FFFFFF"
          strokeWidth="2.5"
        />
        {Array.from({ length: 28 }, (_, index) => {
          const x = net.l + ((net.r - net.l) * (index + 1)) / 29;
          return (
            <line
              key={`mesh-v-${index}`}
              x1={x}
              y1={netTop}
              x2={x}
              y2={netTop + netHeight}
              stroke="#FFFFFF"
              strokeWidth="1"
              opacity="0.9"
            />
          );
        })}
        {[0.38, 0.72].map((step) => (
          <line
            key={`mesh-h-${step}`}
            x1={net.l}
            y1={netTop + netHeight * step}
            x2={net.r}
            y2={netTop + netHeight * step}
            stroke="#FFFFFF"
            strokeWidth="1"
            opacity="0.9"
          />
        ))}
      </g>

      <Person x={oppLeft.x} y={oppLeft.y} scale={1.15} tone="lime" />
      <Person x={oppRight.x} y={oppRight.y} scale={1.15} tone="lime" />
      <Person x={teamLeft.x} y={teamLeft.y} scale={1.35} tone="team" />
      <Person x={teamRight.x} y={teamRight.y} scale={1.35} tone="team" />

      {variant === "overview" ? (
        <g fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" markerEnd="url(#courtArrow)">
          <path
            d={`M ${opponentsLabel.x - 58} ${opponentsLabel.y + 26} Q ${oppLeft.x + 8} ${opponentsLabel.y + 48} ${oppLeft.x + 2} ${oppLeft.y - 28}`}
          />
          <path
            d={`M ${opponentsLabel.x + 58} ${opponentsLabel.y + 26} Q ${oppRight.x - 8} ${opponentsLabel.y + 48} ${oppRight.x - 2} ${oppRight.y - 28}`}
          />
          <path
            d={`M ${teamLabel.x - 52} ${teamLabel.y - 26} Q ${teamLeft.x} ${teamLabel.y - 52} ${teamLeft.x} ${teamLeft.y + 24}`}
          />
          <path
            d={`M ${teamLabel.x + 52} ${teamLabel.y - 26} Q ${teamRight.x} ${teamLabel.y - 52} ${teamRight.x} ${teamRight.y + 24}`}
          />
          <path
            d={`M ${kitchenArrowStart.x} ${kitchenArrowStart.y} Q ${kitchenArrowControl.x} ${kitchenArrowControl.y} ${kitchenArrowEnd.x} ${kitchenArrowEnd.y}`}
          />
          <path
            d={`M ${baselineArrowStart.x} ${baselineArrowStart.y} Q ${baselineArrowControl.x} ${baselineArrowControl.y} ${baselineArrowEnd.x} ${baselineArrowEnd.y}`}
          />
        </g>
      ) : null}

      {variant === "overview" ? (
        <g>
          <Callout x={opponentsLabel.x} y={opponentsLabel.y} lines={["Opponents"]} width={188} />
          <Callout x={teamLabel.x} y={teamLabel.y} lines={["Your team"]} width={176} />
          <Callout
            x={kitchenLabel.x}
            y={kitchenLabel.y}
            lines={["Kitchen", "(non-volley zone)"]}
            tone="dark"
            width={176}
          />
          <Callout x={baselineLabel.x} y={baselineLabel.y} lines={["Baseline"]} width={132} />
        </g>
      ) : null}

      {variant === "movement" || variant === "return" ? (
        <g>
          <path
            d={`M ${shotStart.x} ${shotStart.y} Q ${shotMid.x} ${shotMid.y} ${shotEnd.x} ${shotEnd.y}`}
            fill="none"
            stroke="#C5F344"
            strokeWidth="3.5"
            strokeDasharray="1.5 8"
            strokeLinecap="round"
          />
          <circle cx={shotMid.x - 8} cy={shotMid.y + 6} r="8" fill="#C5F344" stroke="#123B32" strokeWidth="1.6" />
          <Callout
            x={nearCenter.cx}
            y={572}
            lines={[variant === "return" ? "You (returned)" : "You (your team)"]}
            width={variant === "return" ? 176 : 196}
          />
        </g>
      ) : null}
    </svg>
  );
}
