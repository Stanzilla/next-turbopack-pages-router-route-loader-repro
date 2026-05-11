export const packageId = "052";

export function getPackageValue(seed) {
  return seed + 52 + packageId.charCodeAt(0);
}
