export const packageId = "068";

export function getPackageValue(seed) {
  return seed + 68 + packageId.charCodeAt(0);
}
