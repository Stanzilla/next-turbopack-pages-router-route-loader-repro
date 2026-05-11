export default function Dynamic013({ routeName, seed }) {
  const score = seed * 13 + 13;
  return (
    <article className="dynamicWidget" data-dynamic="013">
      <strong>Dynamic 013</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
