export const packageId = "010";

export function getPackageValue(seed) {
  return seed + 10 + packageId.charCodeAt(0);
}
