export const packageId = "011";

export function getPackageValue(seed) {
  return seed + 11 + packageId.charCodeAt(0);
}
