export const packageId = "055";

export function getPackageValue(seed) {
  return seed + 55 + packageId.charCodeAt(0);
}
