export default function Dynamic060({ routeName, seed }) {
  const score = seed * 60 + 60;
  return (
    <article className="dynamicWidget" data-dynamic="060">
      <strong>Dynamic 060</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
