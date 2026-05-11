export const packageId = "007";

export function getPackageValue(seed) {
  return seed + 7 + packageId.charCodeAt(0);
}
