export default function Dynamic058({ routeName, seed }) {
  const score = seed * 58 + 58;
  return (
    <article className="dynamicWidget" data-dynamic="058">
      <strong>Dynamic 058</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
