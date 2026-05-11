export const packageId = "044";

export function getPackageValue(seed) {
  return seed + 44 + packageId.charCodeAt(0);
}
