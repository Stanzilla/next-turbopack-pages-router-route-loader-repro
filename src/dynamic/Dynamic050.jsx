export default function Dynamic050({ routeName, seed }) {
  const score = seed * 50 + 50;
  return (
    <article className="dynamicWidget" data-dynamic="050">
      <strong>Dynamic 050</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
