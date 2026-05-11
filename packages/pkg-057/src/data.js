export const packageId = "057";

export function getPackageValue(seed) {
  return seed + 57 + packageId.charCodeAt(0);
}
