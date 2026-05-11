export const packageId = "009";

export function getPackageValue(seed) {
  return seed + 9 + packageId.charCodeAt(0);
}
