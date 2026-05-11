export const packageId = "038";

export function getPackageValue(seed) {
  return seed + 38 + packageId.charCodeAt(0);
}
