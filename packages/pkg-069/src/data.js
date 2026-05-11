export const packageId = "069";

export function getPackageValue(seed) {
  return seed + 69 + packageId.charCodeAt(0);
}
