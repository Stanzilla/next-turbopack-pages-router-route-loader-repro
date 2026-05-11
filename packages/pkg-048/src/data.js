export const packageId = "048";

export function getPackageValue(seed) {
  return seed + 48 + packageId.charCodeAt(0);
}
