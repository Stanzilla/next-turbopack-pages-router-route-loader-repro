export default function Dynamic023({ routeName, seed }) {
  const score = seed * 23 + 23;
  return (
    <article className="dynamicWidget" data-dynamic="023">
      <strong>Dynamic 023</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
