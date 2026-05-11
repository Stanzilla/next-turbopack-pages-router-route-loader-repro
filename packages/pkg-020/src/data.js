export const packageId = "020";

export function getPackageValue(seed) {
  return seed + 20 + packageId.charCodeAt(0);
}
