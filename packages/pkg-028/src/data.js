export const packageId = "028";

export function getPackageValue(seed) {
  return seed + 28 + packageId.charCodeAt(0);
}
