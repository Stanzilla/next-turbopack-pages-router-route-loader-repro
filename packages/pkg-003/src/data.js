export const packageId = "003";

export function getPackageValue(seed) {
  return seed + 3 + packageId.charCodeAt(0);
}
