export const packageId = "022";

export function getPackageValue(seed) {
  return seed + 22 + packageId.charCodeAt(0);
}
