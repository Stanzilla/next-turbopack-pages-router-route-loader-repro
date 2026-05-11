export const packageId = "016";

export function getPackageValue(seed) {
  return seed + 16 + packageId.charCodeAt(0);
}
