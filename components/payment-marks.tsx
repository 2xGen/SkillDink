const cards = [
  { name: "Visa", mark: <VisaMark /> },
  { name: "Mastercard", mark: <MastercardMark /> },
  { name: "American Express", mark: <AmexMark /> },
  { name: "Discover", mark: <DiscoverMark /> },
  { name: "Diners Club", mark: <DinersMark /> },
  { name: "JCB", mark: <JcbMark /> },
  { name: "UnionPay", mark: <UnionPayMark /> },
];

export function PaymentMarks({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="flex flex-wrap items-center gap-1.5" aria-label="Accepted cards">
        {cards.map((card) => (
          <li key={card.name}>
            <span className="inline-flex h-8 min-w-12 items-center justify-center rounded-md bg-white px-1.5 shadow-[0_1px_2px_rgba(18,59,50,0.12)] ring-1 ring-forest/10">
              <span className="sr-only">{card.name}</span>
              <span aria-hidden="true">{card.mark}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold opacity-80">
        <LockIcon />
        Secure payment by Stripe. Card details stay on Stripe.
      </p>
    </div>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 shrink-0">
      <rect x="3.2" y="7" width="9.6" height="7" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.2 7V5.2a2.8 2.8 0 0 1 5.6 0V7" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function VisaMark() {
  return <span className="text-[13px] font-black tracking-[-0.04em] text-[#1A1F71] italic">VISA</span>;
}

function MastercardMark() {
  return (
    <svg viewBox="0 0 36 16" aria-hidden="true" className="h-4 w-9">
      <circle cx="14" cy="8" r="6" fill="#EB001B" />
      <circle cx="22" cy="8" r="6" fill="#F79E1B" />
      <path d="M18 3.4a6 6 0 0 1 0 9.2 6 6 0 0 1 0-9.2Z" fill="#FF5F00" />
    </svg>
  );
}

function AmexMark() {
  return <span className="text-[11px] font-black tracking-tight text-[#2E77BC]">AMEX</span>;
}

function DiscoverMark() {
  return <span className="text-[10px] font-black tracking-tight text-[#F76F20]">DISC</span>;
}

function DinersMark() {
  return (
    <svg viewBox="0 0 28 16" aria-hidden="true" className="h-4 w-7">
      <circle cx="11" cy="8" r="5.2" fill="none" stroke="#004A97" strokeWidth="1.4" />
      <circle cx="17" cy="8" r="5.2" fill="none" stroke="#004A97" strokeWidth="1.4" />
    </svg>
  );
}

function JcbMark() {
  return (
    <span className="text-[11px] font-black tracking-tight">
      <span className="text-[#0E4C96]">J</span>
      <span className="text-[#E10600]">C</span>
      <span className="text-[#00A650]">B</span>
    </span>
  );
}

function UnionPayMark() {
  return <span className="text-[9px] font-black tracking-tight text-[#E21836]">UnionPay</span>;
}
