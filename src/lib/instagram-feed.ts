import amalfiImg from "@/assets/portfolio-amalfi.jpg";
import comoImg from "@/assets/portfolio-como.jpg";
import pugliaImg from "@/assets/portfolio-puglia.jpg";
import founderImg from "@/assets/founder.jpg";

export const INSTAGRAM_USERNAME = "italian.wedding.magic";
export const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

export type InstagramPost = {
  id: string;
  permalink: string;
  imageUrl: string;
  alt: string;
};

const IG_APP_ID = "936619743392459";
const FEED_LIMIT = 6;
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

let cachedPosts: InstagramPost[] | null = null;
let cachedAt = 0;

const FALLBACK_POSTS: InstagramPost[] = [
  { id: "fallback-como", permalink: INSTAGRAM_PROFILE_URL, imageUrl: comoImg, alt: "Lake Como wedding — Wedding Magic Italy on Instagram" },
  { id: "fallback-amalfi", permalink: INSTAGRAM_PROFILE_URL, imageUrl: amalfiImg, alt: "Amalfi Coast wedding — Wedding Magic Italy on Instagram" },
  { id: "fallback-puglia", permalink: INSTAGRAM_PROFILE_URL, imageUrl: pugliaImg, alt: "Puglia wedding — Wedding Magic Italy on Instagram" },
  { id: "fallback-founder", permalink: INSTAGRAM_PROFILE_URL, imageUrl: founderImg, alt: "Wedding Magic Italy studio — Instagram" },
  { id: "fallback-como-2", permalink: INSTAGRAM_PROFILE_URL, imageUrl: comoImg, alt: "Italian destination wedding — follow @italian.wedding.magic" },
  { id: "fallback-amalfi-2", permalink: INSTAGRAM_PROFILE_URL, imageUrl: amalfiImg, alt: "Luxury wedding Italy — follow @italian.wedding.magic" },
];

type IgWebProfileNode = {
  id: string;
  shortcode: string;
  thumbnail_src?: string;
  display_url?: string;
  accessibility_caption?: string | null;
};

type IgWebProfileResponse = {
  data?: {
    user?: {
      edge_owner_to_timeline_media?: {
        edges?: { node: IgWebProfileNode }[];
      };
    };
  };
};

type IgGraphMedia = {
  id: string;
  media_type: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
};

type IgGraphResponse = {
  data?: IgGraphMedia[];
};

function mapWebNodes(nodes: IgWebProfileNode[]): InstagramPost[] {
  return nodes.slice(0, FEED_LIMIT).map((node) => ({
    id: node.id,
    permalink: `https://www.instagram.com/p/${node.shortcode}/`,
    imageUrl: node.thumbnail_src ?? node.display_url ?? "",
    alt: node.accessibility_caption?.trim() || "Instagram — Wedding Magic Italy",
  })).filter((p) => p.imageUrl.length > 0);
}

async function fetchFromGraphApi(token: string): Promise<InstagramPost[] | null> {
  const fields = "id,caption,media_type,media_url,permalink,thumbnail_url";
  const url = new URL("https://graph.instagram.com/me/media");
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", String(FEED_LIMIT));
  url.searchParams.set("access_token", token);

  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) return null;

  const json = (await res.json()) as IgGraphResponse;
  const items = json.data ?? [];

  const posts = items
    .filter((item) => item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM")
    .map((item) => ({
      id: item.id,
      permalink: item.permalink,
      imageUrl: item.media_url ?? item.thumbnail_url ?? "",
      alt: item.caption?.split("\n")[0]?.trim() || "Instagram — Wedding Magic Italy",
    }))
    .filter((p) => p.imageUrl.length > 0);

  return posts.length > 0 ? posts.slice(0, FEED_LIMIT) : null;
}

async function fetchFromWebProfile(): Promise<InstagramPost[] | null> {
  const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${INSTAGRAM_USERNAME}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0 (compatible; WeddingMagicItaly/1.0; +https://weddingmagicitaly.com)",
      "X-IG-App-ID": IG_APP_ID,
    },
  });

  if (!res.ok) return null;

  const json = (await res.json()) as IgWebProfileResponse;
  const edges = json.data?.user?.edge_owner_to_timeline_media?.edges ?? [];
  const nodes = edges.map((e) => e.node);
  const posts = mapWebNodes(nodes);

  return posts.length > 0 ? posts : null;
}

export async function getInstagramFeed(): Promise<InstagramPost[]> {
  const now = Date.now();
  if (cachedPosts && now - cachedAt < CACHE_TTL_MS) {
    return cachedPosts;
  }

  const token = typeof process !== "undefined" ? process.env.INSTAGRAM_ACCESS_TOKEN : undefined;

  let posts: InstagramPost[] | null = null;

  if (token) {
    try {
      posts = await fetchFromGraphApi(token);
    } catch {
      posts = null;
    }
  }

  if (!posts) {
    try {
      posts = await fetchFromWebProfile();
    } catch {
      posts = null;
    }
  }

  const result = posts ?? FALLBACK_POSTS;
  cachedPosts = result;
  cachedAt = now;
  return result;
}
