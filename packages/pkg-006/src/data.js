export const packageId = "006";

export function getPackageValue(seed) {
  return seed + 6 + packageId.charCodeAt(0);
}
