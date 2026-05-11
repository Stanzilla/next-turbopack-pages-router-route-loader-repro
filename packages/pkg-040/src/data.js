export const packageId = "040";

export function getPackageValue(seed) {
  return seed + 40 + packageId.charCodeAt(0);
}
