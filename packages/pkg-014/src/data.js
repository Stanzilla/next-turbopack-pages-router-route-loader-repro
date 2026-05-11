export const packageId = "014";

export function getPackageValue(seed) {
  return seed + 14 + packageId.charCodeAt(0);
}
