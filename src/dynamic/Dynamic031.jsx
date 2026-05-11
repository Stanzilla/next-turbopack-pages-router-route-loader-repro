export default function Dynamic031({ routeName, seed }) {
  const score = seed * 31 + 31;
  return (
    <article className="dynamicWidget" data-dynamic="031">
      <strong>Dynamic 031</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
