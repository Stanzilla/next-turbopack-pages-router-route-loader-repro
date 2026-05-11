export const packageId = "072";

export function getPackageValue(seed) {
  return seed + 72 + packageId.charCodeAt(0);
}
