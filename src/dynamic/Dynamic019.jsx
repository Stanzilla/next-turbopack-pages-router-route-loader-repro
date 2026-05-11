export default function Dynamic019({ routeName, seed }) {
  const score = seed * 19 + 19;
  return (
    <article className="dynamicWidget" data-dynamic="019">
      <strong>Dynamic 019</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
