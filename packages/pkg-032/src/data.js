export const packageId = "032";

export function getPackageValue(seed) {
  return seed + 32 + packageId.charCodeAt(0);
}
