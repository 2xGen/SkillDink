import { Suspense } from "react";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { hasCourseAccess } from "@/lib/session";

export function BuyCourseButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ButtonLink href="/basket" className={className}>
      {children}
      <ArrowIcon />
    </ButtonLink>
  );
}

export function CourseOfferButton({
  className = "",
  buyLabel,
  href,
}: {
  className?: string;
  buyLabel: string;
  href?: string;
}) {
  return (
    <Suspense
      fallback={<span className={`inline-block h-12 w-56 rounded-full bg-lime/40 ${className}`} />}
    >
      <CourseOffer className={className} buyLabel={buyLabel} href={href} />
    </Suspense>
  );
}

async function CourseOffer({
  className,
  buyLabel,
  href,
}: {
  className: string;
  buyLabel: string;
  href?: string;
}) {
  const owned = await hasCourseAccess();
  if (owned) {
    return (
      <ButtonLink href="/learn/what-is-pickleball" className={className}>
        Continue the course
        <ArrowIcon />
      </ButtonLink>
    );
  }

  if (href) {
    return (
      <ButtonLink href={href} className={className}>
        {buyLabel}
        <ArrowIcon />
      </ButtonLink>
    );
  }

  return <BuyCourseButton className={className}>{buyLabel}</BuyCourseButton>;
}
