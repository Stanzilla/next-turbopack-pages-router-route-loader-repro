export const packageId = "039";

export function getPackageValue(seed) {
  return seed + 39 + packageId.charCodeAt(0);
}
