export const packageId = "063";

export function getPackageValue(seed) {
  return seed + 63 + packageId.charCodeAt(0);
}
