export const packageId = "035";

export function getPackageValue(seed) {
  return seed + 35 + packageId.charCodeAt(0);
}
