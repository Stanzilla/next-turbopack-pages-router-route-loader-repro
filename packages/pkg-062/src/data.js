export const packageId = "062";

export function getPackageValue(seed) {
  return seed + 62 + packageId.charCodeAt(0);
}
