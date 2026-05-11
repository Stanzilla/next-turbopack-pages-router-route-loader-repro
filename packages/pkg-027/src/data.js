export const packageId = "027";

export function getPackageValue(seed) {
  return seed + 27 + packageId.charCodeAt(0);
}
