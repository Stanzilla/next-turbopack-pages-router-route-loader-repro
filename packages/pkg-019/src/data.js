export const packageId = "019";

export function getPackageValue(seed) {
  return seed + 19 + packageId.charCodeAt(0);
}
