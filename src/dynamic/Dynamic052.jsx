export default function Dynamic052({ routeName, seed }) {
  const score = seed * 52 + 52;
  return (
    <article className="dynamicWidget" data-dynamic="052">
      <strong>Dynamic 052</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
