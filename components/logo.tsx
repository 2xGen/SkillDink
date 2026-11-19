import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-display text-[1.7rem] font-extrabold not-italic leading-none tracking-[-0.04em] text-forest ${className}`}
    >
      SkillDink
    </Link>
  );
}
