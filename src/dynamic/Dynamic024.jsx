export default function Dynamic024({ routeName, seed }) {
  const score = seed * 24 + 24;
  return (
    <article className="dynamicWidget" data-dynamic="024">
      <strong>Dynamic 024</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
