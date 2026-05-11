export const packageId = "041";

export function getPackageValue(seed) {
  return seed + 41 + packageId.charCodeAt(0);
}
