export const packageId = "034";

export function getPackageValue(seed) {
  return seed + 34 + packageId.charCodeAt(0);
}
