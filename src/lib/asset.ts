/** Prefixes a /public path with the deployment base path (needed for unoptimised <Image> on GitHub Pages). */
export const asset = (path: string) =>
  path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}` : path;
