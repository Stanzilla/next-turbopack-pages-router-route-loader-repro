export default function Dynamic017({ routeName, seed }) {
  const score = seed * 17 + 17;
  return (
    <article className="dynamicWidget" data-dynamic="017">
      <strong>Dynamic 017</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
