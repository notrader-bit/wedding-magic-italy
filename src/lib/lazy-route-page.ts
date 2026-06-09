import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export function lazyRoutePage<P = Record<string, never>>(
  loader: () => Promise<{ default: ComponentType<P> }>,
): LazyExoticComponent<ComponentType<P>> {
  return lazy(loader);
}
