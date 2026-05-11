export const packageId = "066";

export function getPackageValue(seed) {
  return seed + 66 + packageId.charCodeAt(0);
}
