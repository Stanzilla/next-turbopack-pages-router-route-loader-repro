export default function Dynamic005({ routeName, seed }) {
  const score = seed * 5 + 5;
  return (
    <article className="dynamicWidget" data-dynamic="005">
      <strong>Dynamic 005</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
