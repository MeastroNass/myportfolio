export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
