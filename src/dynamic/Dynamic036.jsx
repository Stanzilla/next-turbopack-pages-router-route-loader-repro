export default function Dynamic036({ routeName, seed }) {
  const score = seed * 36 + 36;
  return (
    <article className="dynamicWidget" data-dynamic="036">
      <strong>Dynamic 036</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
