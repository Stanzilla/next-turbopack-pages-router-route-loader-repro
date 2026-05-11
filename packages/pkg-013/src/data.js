export const packageId = "013";

export function getPackageValue(seed) {
  return seed + 13 + packageId.charCodeAt(0);
}
