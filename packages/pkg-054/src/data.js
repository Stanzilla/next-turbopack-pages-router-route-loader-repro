export const packageId = "054";

export function getPackageValue(seed) {
  return seed + 54 + packageId.charCodeAt(0);
}
