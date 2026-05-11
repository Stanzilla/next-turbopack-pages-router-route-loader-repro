export const packageId = "029";

export function getPackageValue(seed) {
  return seed + 29 + packageId.charCodeAt(0);
}
