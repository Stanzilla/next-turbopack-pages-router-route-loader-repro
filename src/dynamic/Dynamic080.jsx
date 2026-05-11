export default function Dynamic080({ routeName, seed }) {
  const score = seed * 80 + 80;
  return (
    <article className="dynamicWidget" data-dynamic="080">
      <strong>Dynamic 080</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
