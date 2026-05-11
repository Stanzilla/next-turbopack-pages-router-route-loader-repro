export const packageId = "077";

export function getPackageValue(seed) {
  return seed + 77 + packageId.charCodeAt(0);
}
