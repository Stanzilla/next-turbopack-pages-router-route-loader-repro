import { getPackageValue, packageId } from "./data.js";

export default function PackageWidget029({ routeName, seed }) {
  return (
    <article className="packageWidget" data-package={packageId}>
      <strong>@repro/pkg-029</strong>
      <span>{routeName}</span>
      <span>{getPackageValue(seed)}</span>
    </article>
  );
}
