export const packageId = "012";

export function getPackageValue(seed) {
  return seed + 12 + packageId.charCodeAt(0);
}
