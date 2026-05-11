export default function Dynamic016({ routeName, seed }) {
  const score = seed * 16 + 16;
  return (
    <article className="dynamicWidget" data-dynamic="016">
      <strong>Dynamic 016</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
