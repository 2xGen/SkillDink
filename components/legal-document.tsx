import { Container } from "@/components/container";

export function LegalDocument({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="py-12 sm:py-16">
      <article className="max-w-3xl">
        <h1 className="font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">{title}</h1>
        <p className="mt-4 text-sm font-semibold text-forest/60">Last updated: 19 November 2026</p>
        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-forest/85 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:italic [&_h2]:tracking-[-0.03em] [&_h2]:text-forest [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </article>
    </Container>
  );
}
