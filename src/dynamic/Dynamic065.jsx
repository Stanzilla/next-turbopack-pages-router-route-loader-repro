export default function Dynamic065({ routeName, seed }) {
  const score = seed * 65 + 65;
  return (
    <article className="dynamicWidget" data-dynamic="065">
      <strong>Dynamic 065</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
