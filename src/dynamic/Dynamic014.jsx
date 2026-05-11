export default function Dynamic014({ routeName, seed }) {
  const score = seed * 14 + 14;
  return (
    <article className="dynamicWidget" data-dynamic="014">
      <strong>Dynamic 014</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
