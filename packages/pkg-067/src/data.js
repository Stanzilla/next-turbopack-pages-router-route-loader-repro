export const packageId = "067";

export function getPackageValue(seed) {
  return seed + 67 + packageId.charCodeAt(0);
}
