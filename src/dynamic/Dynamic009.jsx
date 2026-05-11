export default function Dynamic009({ routeName, seed }) {
  const score = seed * 9 + 9;
  return (
    <article className="dynamicWidget" data-dynamic="009">
      <strong>Dynamic 009</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
