export const packageId = "024";

export function getPackageValue(seed) {
  return seed + 24 + packageId.charCodeAt(0);
}
