export const packageId = "059";

export function getPackageValue(seed) {
  return seed + 59 + packageId.charCodeAt(0);
}
