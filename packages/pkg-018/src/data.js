export const packageId = "018";

export function getPackageValue(seed) {
  return seed + 18 + packageId.charCodeAt(0);
}
