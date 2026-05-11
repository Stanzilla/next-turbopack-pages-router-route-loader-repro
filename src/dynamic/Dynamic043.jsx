export default function Dynamic043({ routeName, seed }) {
  const score = seed * 43 + 43;
  return (
    <article className="dynamicWidget" data-dynamic="043">
      <strong>Dynamic 043</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
