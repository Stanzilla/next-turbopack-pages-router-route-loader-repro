export const packageId = "073";

export function getPackageValue(seed) {
  return seed + 73 + packageId.charCodeAt(0);
}
