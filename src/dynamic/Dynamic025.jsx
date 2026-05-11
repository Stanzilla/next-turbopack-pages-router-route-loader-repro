export default function Dynamic025({ routeName, seed }) {
  const score = seed * 25 + 25;
  return (
    <article className="dynamicWidget" data-dynamic="025">
      <strong>Dynamic 025</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
