export default function Dynamic066({ routeName, seed }) {
  const score = seed * 66 + 66;
  return (
    <article className="dynamicWidget" data-dynamic="066">
      <strong>Dynamic 066</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
