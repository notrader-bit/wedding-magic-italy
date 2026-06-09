import { createRouter } from "@tanstack/react-router";
import type { Dict, Lang } from "@/i18n/dict-types";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {
      dictionary: null as unknown as Dict,
      lang: "en" as Lang,
    },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
