export const packageId = "078";

export function getPackageValue(seed) {
  return seed + 78 + packageId.charCodeAt(0);
}
