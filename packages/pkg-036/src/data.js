export const packageId = "036";

export function getPackageValue(seed) {
  return seed + 36 + packageId.charCodeAt(0);
}
