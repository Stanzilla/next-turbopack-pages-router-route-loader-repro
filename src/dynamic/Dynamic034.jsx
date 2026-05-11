export default function Dynamic034({ routeName, seed }) {
  const score = seed * 34 + 34;
  return (
    <article className="dynamicWidget" data-dynamic="034">
      <strong>Dynamic 034</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
