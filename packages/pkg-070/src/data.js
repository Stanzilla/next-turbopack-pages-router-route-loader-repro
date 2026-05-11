export const packageId = "070";

export function getPackageValue(seed) {
  return seed + 70 + packageId.charCodeAt(0);
}
