export const packageId = "065";

export function getPackageValue(seed) {
  return seed + 65 + packageId.charCodeAt(0);
}
