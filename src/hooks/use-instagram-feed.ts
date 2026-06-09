import { useEffect, useState } from "react";
import {
  getInstagramFeed,
  INSTAGRAM_FALLBACK_POSTS,
  type InstagramPost,
} from "@/lib/instagram-feed";

/** Renders immediately with bundled fallbacks; refreshes from API in the background. */
export function useInstagramFeed(): InstagramPost[] {
  const [posts, setPosts] = useState<InstagramPost[]>(INSTAGRAM_FALLBACK_POSTS);

  useEffect(() => {
    let cancelled = false;
    void getInstagramFeed().then((next) => {
      if (!cancelled) setPosts(next);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return posts;
}
