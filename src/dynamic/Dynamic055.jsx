export default function Dynamic055({ routeName, seed }) {
  const score = seed * 55 + 55;
  return (
    <article className="dynamicWidget" data-dynamic="055">
      <strong>Dynamic 055</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
