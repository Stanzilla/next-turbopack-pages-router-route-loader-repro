export const packageId = "026";

export function getPackageValue(seed) {
  return seed + 26 + packageId.charCodeAt(0);
}
