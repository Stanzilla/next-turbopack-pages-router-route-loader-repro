export const packageId = "001";

export function getPackageValue(seed) {
  return seed + 1 + packageId.charCodeAt(0);
}
