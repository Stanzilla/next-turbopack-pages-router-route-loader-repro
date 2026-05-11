export const packageId = "050";

export function getPackageValue(seed) {
  return seed + 50 + packageId.charCodeAt(0);
}
