export const packageId = "025";

export function getPackageValue(seed) {
  return seed + 25 + packageId.charCodeAt(0);
}
