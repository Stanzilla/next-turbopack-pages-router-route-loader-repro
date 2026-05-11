export default function Dynamic061({ routeName, seed }) {
  const score = seed * 61 + 61;
  return (
    <article className="dynamicWidget" data-dynamic="061">
      <strong>Dynamic 061</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
