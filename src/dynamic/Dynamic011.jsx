export default function Dynamic011({ routeName, seed }) {
  const score = seed * 11 + 11;
  return (
    <article className="dynamicWidget" data-dynamic="011">
      <strong>Dynamic 011</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
