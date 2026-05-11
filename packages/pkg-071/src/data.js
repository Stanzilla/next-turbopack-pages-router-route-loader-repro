export const packageId = "071";

export function getPackageValue(seed) {
  return seed + 71 + packageId.charCodeAt(0);
}
