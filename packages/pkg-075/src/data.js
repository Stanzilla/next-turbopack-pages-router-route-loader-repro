export const packageId = "075";

export function getPackageValue(seed) {
  return seed + 75 + packageId.charCodeAt(0);
}
