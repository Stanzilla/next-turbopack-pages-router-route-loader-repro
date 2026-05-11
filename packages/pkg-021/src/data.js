export const packageId = "021";

export function getPackageValue(seed) {
  return seed + 21 + packageId.charCodeAt(0);
}
