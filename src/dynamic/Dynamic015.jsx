export default function Dynamic015({ routeName, seed }) {
  const score = seed * 15 + 15;
  return (
    <article className="dynamicWidget" data-dynamic="015">
      <strong>Dynamic 015</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
