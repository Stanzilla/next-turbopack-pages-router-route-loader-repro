export const packageId = "061";

export function getPackageValue(seed) {
  return seed + 61 + packageId.charCodeAt(0);
}
