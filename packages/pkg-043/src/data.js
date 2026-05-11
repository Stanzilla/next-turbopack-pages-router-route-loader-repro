export const packageId = "043";

export function getPackageValue(seed) {
  return seed + 43 + packageId.charCodeAt(0);
}
