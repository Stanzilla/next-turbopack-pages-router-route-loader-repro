export const packageId = "042";

export function getPackageValue(seed) {
  return seed + 42 + packageId.charCodeAt(0);
}
