export const packageId = "023";

export function getPackageValue(seed) {
  return seed + 23 + packageId.charCodeAt(0);
}
