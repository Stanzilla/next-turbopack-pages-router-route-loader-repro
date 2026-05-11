export default function Dynamic078({ routeName, seed }) {
  const score = seed * 78 + 78;
  return (
    <article className="dynamicWidget" data-dynamic="078">
      <strong>Dynamic 078</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
