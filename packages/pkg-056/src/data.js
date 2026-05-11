export const packageId = "056";

export function getPackageValue(seed) {
  return seed + 56 + packageId.charCodeAt(0);
}
