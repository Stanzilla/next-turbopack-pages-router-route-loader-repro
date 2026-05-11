export const packageId = "015";

export function getPackageValue(seed) {
  return seed + 15 + packageId.charCodeAt(0);
}
