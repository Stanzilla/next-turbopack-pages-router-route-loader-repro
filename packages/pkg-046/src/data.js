export const packageId = "046";

export function getPackageValue(seed) {
  return seed + 46 + packageId.charCodeAt(0);
}
