import { Link, useParams, type LinkComponentProps } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type AnchorProps = Omit<ComponentProps<"a">, "href">;
type ExtraProps = Pick<
  LinkComponentProps<"a">,
  "activeProps" | "inactiveProps" | "activeOptions" | "preload" | "preloadDelay" | "resetScroll" | "search" | "hash" | "replace"
>;

export type LocaleLinkProps = AnchorProps &
  ExtraProps & {
    to: "/" | "/about" | "/services" | "/portfolio" | "/packages" | "/experience" | "/contact";
  };

/**
 * Drop-in replacement for <Link> that prefixes the current language into the
 * pathname (e.g. /uk/about). EN is the default and renders without a prefix.
 */
export function LocaleLink({ to, ...rest }: LocaleLinkProps) {
  const params = useParams({ strict: false }) as { lang?: string };
  const lang = params.lang;
  const target = to === "/" ? "/{-$lang}/" : `/{-$lang}${to}`;
  return (
    // The optional-locale route is matched at runtime; loosen the literal type.
    <Link {...(rest as object)} to={target as never} params={{ lang } as never} />
  );
}
