export const packageId = "079";

export function getPackageValue(seed) {
  return seed + 79 + packageId.charCodeAt(0);
}
