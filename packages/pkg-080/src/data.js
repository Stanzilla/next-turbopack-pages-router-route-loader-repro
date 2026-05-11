export const packageId = "080";

export function getPackageValue(seed) {
  return seed + 80 + packageId.charCodeAt(0);
}
