export const packageId = "017";

export function getPackageValue(seed) {
  return seed + 17 + packageId.charCodeAt(0);
}
