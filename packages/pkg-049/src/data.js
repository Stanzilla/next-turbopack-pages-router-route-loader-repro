export const packageId = "049";

export function getPackageValue(seed) {
  return seed + 49 + packageId.charCodeAt(0);
}
