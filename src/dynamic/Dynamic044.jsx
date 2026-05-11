export default function Dynamic044({ routeName, seed }) {
  const score = seed * 44 + 44;
  return (
    <article className="dynamicWidget" data-dynamic="044">
      <strong>Dynamic 044</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
