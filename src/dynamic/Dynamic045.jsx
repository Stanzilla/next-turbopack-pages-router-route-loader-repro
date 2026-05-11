export default function Dynamic045({ routeName, seed }) {
  const score = seed * 45 + 45;
  return (
    <article className="dynamicWidget" data-dynamic="045">
      <strong>Dynamic 045</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
