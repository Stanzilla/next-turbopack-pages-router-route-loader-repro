export const packageId = "074";

export function getPackageValue(seed) {
  return seed + 74 + packageId.charCodeAt(0);
}
