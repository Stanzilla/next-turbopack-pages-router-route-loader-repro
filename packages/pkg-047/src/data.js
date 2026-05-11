export const packageId = "047";

export function getPackageValue(seed) {
  return seed + 47 + packageId.charCodeAt(0);
}
