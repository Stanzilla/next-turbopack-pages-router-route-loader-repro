export const packageId = "033";

export function getPackageValue(seed) {
  return seed + 33 + packageId.charCodeAt(0);
}
