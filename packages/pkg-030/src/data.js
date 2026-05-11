export const packageId = "030";

export function getPackageValue(seed) {
  return seed + 30 + packageId.charCodeAt(0);
}
