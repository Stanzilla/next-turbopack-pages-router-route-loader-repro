import { getPackageValue, packageId } from "./data.js";

export default function PackageWidget047({ routeName, seed }) {
  return (
    <article className="packageWidget" data-package={packageId}>
      <strong>@repro/pkg-047</strong>
      <span>{routeName}</span>
      <span>{getPackageValue(seed)}</span>
    </article>
  );
}
