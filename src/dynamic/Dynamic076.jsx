export default function Dynamic076({ routeName, seed }) {
  const score = seed * 76 + 76;
  return (
    <article className="dynamicWidget" data-dynamic="076">
      <strong>Dynamic 076</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
