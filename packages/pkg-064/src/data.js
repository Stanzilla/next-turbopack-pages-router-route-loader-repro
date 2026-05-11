export const packageId = "064";

export function getPackageValue(seed) {
  return seed + 64 + packageId.charCodeAt(0);
}
