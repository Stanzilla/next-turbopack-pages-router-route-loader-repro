export default function Dynamic039({ routeName, seed }) {
  const score = seed * 39 + 39;
  return (
    <article className="dynamicWidget" data-dynamic="039">
      <strong>Dynamic 039</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
