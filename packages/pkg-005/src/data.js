export const packageId = "005";

export function getPackageValue(seed) {
  return seed + 5 + packageId.charCodeAt(0);
}
