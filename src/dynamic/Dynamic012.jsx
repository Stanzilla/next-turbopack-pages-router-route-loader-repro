export default function Dynamic012({ routeName, seed }) {
  const score = seed * 12 + 12;
  return (
    <article className="dynamicWidget" data-dynamic="012">
      <strong>Dynamic 012</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
