export default function Dynamic079({ routeName, seed }) {
  const score = seed * 79 + 79;
  return (
    <article className="dynamicWidget" data-dynamic="079">
      <strong>Dynamic 079</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
