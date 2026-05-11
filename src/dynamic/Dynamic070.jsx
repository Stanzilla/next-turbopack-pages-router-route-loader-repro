export default function Dynamic070({ routeName, seed }) {
  const score = seed * 70 + 70;
  return (
    <article className="dynamicWidget" data-dynamic="070">
      <strong>Dynamic 070</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
