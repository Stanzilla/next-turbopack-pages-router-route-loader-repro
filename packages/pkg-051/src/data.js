export const packageId = "051";

export function getPackageValue(seed) {
  return seed + 51 + packageId.charCodeAt(0);
}
