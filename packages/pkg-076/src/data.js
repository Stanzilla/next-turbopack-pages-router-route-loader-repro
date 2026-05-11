export const packageId = "076";

export function getPackageValue(seed) {
  return seed + 76 + packageId.charCodeAt(0);
}
