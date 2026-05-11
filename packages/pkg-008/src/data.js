export const packageId = "008";

export function getPackageValue(seed) {
  return seed + 8 + packageId.charCodeAt(0);
}
