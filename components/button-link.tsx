import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  className?: string;
  onClick?: () => void;
};

export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-lime text-forest hover:bg-[#b6e62a]"
      : "border border-forest/80 bg-transparent text-forest hover:bg-forest/5";
  const sizing =
    size === "sm"
      ? "w-fit px-3.5 py-1.5 text-sm sm:px-5 sm:py-3 sm:text-[15px]"
      : "px-5 py-3 text-[15px]";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition ${sizing} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
