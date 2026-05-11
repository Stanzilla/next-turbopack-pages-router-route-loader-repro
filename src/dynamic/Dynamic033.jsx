export default function Dynamic033({ routeName, seed }) {
  const score = seed * 33 + 33;
  return (
    <article className="dynamicWidget" data-dynamic="033">
      <strong>Dynamic 033</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
