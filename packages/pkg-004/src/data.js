export const packageId = "004";

export function getPackageValue(seed) {
  return seed + 4 + packageId.charCodeAt(0);
}
