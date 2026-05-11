export const packageId = "002";

export function getPackageValue(seed) {
  return seed + 2 + packageId.charCodeAt(0);
}
