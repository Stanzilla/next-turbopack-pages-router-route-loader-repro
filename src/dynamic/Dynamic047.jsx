export default function Dynamic047({ routeName, seed }) {
  const score = seed * 47 + 47;
  return (
    <article className="dynamicWidget" data-dynamic="047">
      <strong>Dynamic 047</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
