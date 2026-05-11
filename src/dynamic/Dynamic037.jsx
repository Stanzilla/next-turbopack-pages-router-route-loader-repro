export default function Dynamic037({ routeName, seed }) {
  const score = seed * 37 + 37;
  return (
    <article className="dynamicWidget" data-dynamic="037">
      <strong>Dynamic 037</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
