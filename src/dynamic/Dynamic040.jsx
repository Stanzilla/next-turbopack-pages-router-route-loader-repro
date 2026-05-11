export default function Dynamic040({ routeName, seed }) {
  const score = seed * 40 + 40;
  return (
    <article className="dynamicWidget" data-dynamic="040">
      <strong>Dynamic 040</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
