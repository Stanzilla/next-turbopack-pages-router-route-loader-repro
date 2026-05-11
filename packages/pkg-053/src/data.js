export const packageId = "053";

export function getPackageValue(seed) {
  return seed + 53 + packageId.charCodeAt(0);
}
