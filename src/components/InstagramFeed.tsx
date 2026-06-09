import { Instagram } from "lucide-react";
import type { InstagramPost } from "@/lib/instagram-feed";
import { INSTAGRAM_PROFILE_URL, INSTAGRAM_USERNAME } from "@/lib/instagram-feed";

type Props = {
  eyebrow: string;
  title: string;
  followLabel: string;
  posts: InstagramPost[];
};

export function InstagramFeed({ eyebrow, title, followLabel, posts }: Props) {
  return (
    <section id="instagram" className="bg-cream px-6 py-28 md:px-12 md:py-36" aria-labelledby="instagram-heading">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 id="instagram-heading" className="mt-3 font-display text-4xl leading-[1.08] text-ink md:text-6xl">
              {title}
            </h2>
          </div>
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            @{INSTAGRAM_USERNAME}
          </a>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, index) => (
            <li key={post.id} className="group relative aspect-square overflow-hidden bg-ink/5">
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
                aria-label={followLabel}
              >
                <img
                  src={post.imageUrl}
                  alt={post.alt}
                  width={400}
                  height={400}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/35">
                  <Instagram className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
