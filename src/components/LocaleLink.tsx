import { Link, useParams, type LinkComponentProps } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type AnchorProps = Omit<ComponentProps<"a">, "href">;
type ExtraProps = Pick<
  LinkComponentProps<"a">,
  "activeProps" | "inactiveProps" | "activeOptions" | "preload" | "preloadDelay" | "resetScroll" | "search" | "hash" | "replace"
>;

export type LocaleLinkProps = AnchorProps &
  ExtraProps & {
    to: "/" | "/about" | "/services" | "/portfolio" | "/blog" | "/contact";
    params?: { slug?: string };
  };

/**
 * Drop-in replacement for <Link> that prefixes the current language into the
 * pathname (e.g. /uk/about). EN is the default and renders without a prefix.
 */
export function LocaleLink({ to, params: linkParams, ...rest }: LocaleLinkProps) {
  const params = useParams({ strict: false }) as { lang?: string };
  const lang = params.lang;

  if (to === "/blog" && linkParams?.slug) {
    return (
      <Link
        {...(rest as object)}
        to={"/{-$lang}/blog/$slug" as never}
        params={{ lang, slug: linkParams.slug } as never}
      />
    );
  }

  const target = to === "/" ? "/{-$lang}/" : `/{-$lang}${to}`;
  return (
    <Link {...(rest as object)} to={target as never} params={{ lang } as never} />
  );
}
