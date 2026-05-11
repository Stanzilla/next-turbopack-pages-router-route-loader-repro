export default function Dynamic029({ routeName, seed }) {
  const score = seed * 29 + 29;
  return (
    <article className="dynamicWidget" data-dynamic="029">
      <strong>Dynamic 029</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
