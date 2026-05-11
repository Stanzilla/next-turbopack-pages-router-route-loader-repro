export default function Dynamic021({ routeName, seed }) {
  const score = seed * 21 + 21;
  return (
    <article className="dynamicWidget" data-dynamic="021">
      <strong>Dynamic 021</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
