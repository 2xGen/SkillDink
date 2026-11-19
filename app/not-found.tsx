import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-display text-5xl italic tracking-[-0.03em]">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-forest/80">
        That link does not match a page on SkillDink.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to the homepage
        <ArrowIcon />
      </ButtonLink>
    </Container>
  );
}
