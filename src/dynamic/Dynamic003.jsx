export default function Dynamic003({ routeName, seed }) {
  const score = seed * 3 + 3;
  return (
    <article className="dynamicWidget" data-dynamic="003">
      <strong>Dynamic 003</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
