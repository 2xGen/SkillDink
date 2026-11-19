import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { course, lessonCount } from "@/lib/course";
import { getGuide, guides, type Guide, type GuideBlock } from "@/lib/guides";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide" };
  if (!guide.seo) return { title: guide.title, description: guide.summary };

  const image = {
    url: guide.seo.image
      ? `https://skilldink.com${guide.seo.image.src}`
      : "https://skilldink.com/guides-og.jpg",
    width: guide.seo.image?.width ?? 1200,
    height: guide.seo.image?.height ?? 630,
    alt: guide.seo.imageAlt,
  };

  return {
    title: { absolute: guide.seo.title },
    description: guide.seo.description,
    alternates: { canonical: guide.seo.canonical },
    openGraph: {
      title: guide.seo.ogTitle,
      description: guide.seo.ogDescription,
      type: "article",
      url: guide.seo.canonical,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seo.ogTitle,
      description: guide.seo.ogDescription,
      images: [image],
    },
  };
}

function RichText({ text, tone = "forest" }: { text: string; tone?: "forest" | "light" }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={index}
          className={tone === "light" ? "font-bold text-white" : "font-bold text-forest"}
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const label = link[1].replace(/\*\*/g, "");
      const href = link[2];
      const className =
        tone === "light"
          ? "font-semibold text-lime underline decoration-lime/40 underline-offset-4"
          : "font-semibold text-forest underline decoration-forest/30 underline-offset-4";
      return href.startsWith("/") ? (
        <Link key={index} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a key={index} href={href} className={className}>
          {label}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function GuideBody({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="mt-10 space-y-4 text-base leading-relaxed text-forest/80">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="pt-6 font-display text-3xl italic leading-none tracking-[-0.03em] text-forest"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="pt-2 font-display text-2xl italic leading-none tracking-[-0.03em] text-forest"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul" || block.type === "ol") {
          const List = block.type === "ol" ? "ol" : "ul";
          return (
            <List
              key={index}
              className={
                block.type === "ol"
                  ? "list-decimal space-y-2 pl-5"
                  : "list-disc space-y-2 pl-5"
              }
            >
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </List>
          );
        }
        if (block.type === "table") {
          return (
            <div key={index} className="overflow-x-auto pt-1">
              <table className="w-full min-w-[28rem] border-collapse text-sm leading-relaxed">
                <thead>
                  <tr className="bg-pale text-left text-forest">
                    {block.headers.map((header) => (
                      <th key={header} className="px-3 py-2 font-bold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.join("|")} className="border-t border-forest/10">
                      {row.map((cell) => (
                        <td key={cell} className="px-3 py-2 align-top">
                          <RichText text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p key={index}>
            <RichText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="mt-3 space-y-3 leading-relaxed text-forest/80">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default function GuidePage({ params }: GuidePageProps) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-[76rem] px-5 py-16 sm:px-8">
          <div className="h-10 w-72 rounded-full bg-pale" />
        </div>
      }
    >
      <GuideContent params={params} />
    </Suspense>
  );
}

function isLegacyGuide(guide: Guide): guide is Guide & {
  figure: { src: string; alt: string };
  essentialsHeading: string;
  essentials: string[];
  mistakeHeading: string;
  mistake: string[];
  actionHeading: string;
  action: string[];
  cta: NonNullable<Guide["cta"]>;
} {
  return Boolean(
    !guide.body &&
      guide.figure &&
      guide.essentialsHeading &&
      guide.essentials &&
      guide.mistakeHeading &&
      guide.mistake &&
      guide.actionHeading &&
      guide.action &&
      guide.cta,
  );
}

function GuideClosing({ guide }: { guide: Guide }) {
  if (!guide.cta) return null;
  return (
    <>
      <aside className="mt-10 rounded-[1.6rem] bg-forest px-6 py-7 text-white sm:px-8">
        <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
          {guide.cta.title}
        </h2>
        <div className="mt-4 space-y-3 leading-relaxed text-white/80">
          {guide.cta.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} tone="light" />
            </p>
          ))}
        </div>
        <ButtonLink href="/courses/pickleball-foundations" className="mt-6">
          Explore Pickleball Foundations — ${course.price}
          <ArrowIcon />
        </ButtonLink>
        <p className="mt-4 text-sm text-white/70">
          {course.modules.length} modules · {lessonCount} lessons · One-time payment
        </p>
        {guide.cta.preview ? (
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            <RichText text={guide.cta.preview} tone="light" />
          </p>
        ) : null}
      </aside>
      {guide.reference ? (
        <p className="mt-8 text-sm leading-relaxed text-forest/70">
          <RichText text={guide.reference} />
        </p>
      ) : null}
    </>
  );
}

async function GuideContent({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  if (guide.body) {
    return (
      <Container className="py-12 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-forest/70">
            <Link href="/guides" className="text-forest underline underline-offset-4">
              Free pickleball guides
            </Link>
            {" / "}
            {guide.topic}
          </p>
          <h1 className="mt-4 font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            {guide.title}
          </h1>
          <div className="mt-5 space-y-3 text-lg leading-relaxed text-forest/80">
            {guide.answer.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
          {guide.figure ? (
            <figure className="mt-8">
              <img src={guide.figure.src} alt={guide.figure.alt} className="h-auto w-full" />
            </figure>
          ) : null}
          <GuideBody blocks={guide.body} />
          <GuideClosing guide={guide} />
        </article>
      </Container>
    );
  }

  if (!isLegacyGuide(guide)) notFound();

  return (
    <Container className="py-12 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link href="/guides" className="text-sm font-semibold underline underline-offset-4">
          Free guides
        </Link>
        <p className="mt-4 text-xs font-bold tracking-[0.14em] text-court uppercase">
          {guide.topic}
        </p>
        <h1 className="mt-2 font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-5xl">
          {guide.title}
        </h1>
        <div className="mt-5 space-y-3 text-lg leading-relaxed text-forest/80">
          {guide.answer.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <figure className="mt-8">
          <img src={guide.figure.src} alt={guide.figure.alt} className="h-auto w-full" />
        </figure>

        <section className="mt-10">
          <h2 className="font-display text-3xl italic leading-none tracking-[-0.03em]">
            {guide.essentialsHeading}
          </h2>
          <Paragraphs items={guide.essentials} />
        </section>

        {guide.related ? (
          <p className="mt-6 leading-relaxed text-forest/80">
            {guide.related.text}{" "}
            <Link
              href={guide.related.href}
              className="font-semibold text-forest underline decoration-forest/30 underline-offset-4"
            >
              {guide.related.label}
            </Link>
            .
          </p>
        ) : null}

        <section className="mt-10">
          <h2 className="font-display text-3xl italic leading-none tracking-[-0.03em]">
            {guide.mistakeHeading}
          </h2>
          <Paragraphs items={guide.mistake} />
        </section>

        <section className="mt-10 rounded-[1.4rem] bg-pale p-5">
          <h2 className="font-display text-3xl italic leading-none tracking-[-0.03em]">
            {guide.actionHeading}
          </h2>
          <Paragraphs items={guide.action} />
        </section>

        <GuideClosing guide={guide} />
      </article>
    </Container>
  );
}
