export default function Dynamic028({ routeName, seed }) {
  const score = seed * 28 + 28;
  return (
    <article className="dynamicWidget" data-dynamic="028">
      <strong>Dynamic 028</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
