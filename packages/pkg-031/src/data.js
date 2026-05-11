export const packageId = "031";

export function getPackageValue(seed) {
  return seed + 31 + packageId.charCodeAt(0);
}
