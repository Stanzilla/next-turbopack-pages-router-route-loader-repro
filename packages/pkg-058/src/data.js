export const packageId = "058";

export function getPackageValue(seed) {
  return seed + 58 + packageId.charCodeAt(0);
}
