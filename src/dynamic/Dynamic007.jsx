export default function Dynamic007({ routeName, seed }) {
  const score = seed * 7 + 7;
  return (
    <article className="dynamicWidget" data-dynamic="007">
      <strong>Dynamic 007</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
