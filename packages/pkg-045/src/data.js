export const packageId = "045";

export function getPackageValue(seed) {
  return seed + 45 + packageId.charCodeAt(0);
}
