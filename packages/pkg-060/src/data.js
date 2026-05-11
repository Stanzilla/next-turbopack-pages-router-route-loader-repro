export const packageId = "060";

export function getPackageValue(seed) {
  return seed + 60 + packageId.charCodeAt(0);
}
