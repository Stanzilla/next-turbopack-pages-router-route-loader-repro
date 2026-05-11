export const packageId = "037";

export function getPackageValue(seed) {
  return seed + 37 + packageId.charCodeAt(0);
}
