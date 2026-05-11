export default function Dynamic077({ routeName, seed }) {
  const score = seed * 77 + 77;
  return (
    <article className="dynamicWidget" data-dynamic="077">
      <strong>Dynamic 077</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
