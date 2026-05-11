export default function Dynamic074({ routeName, seed }) {
  const score = seed * 74 + 74;
  return (
    <article className="dynamicWidget" data-dynamic="074">
      <strong>Dynamic 074</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
