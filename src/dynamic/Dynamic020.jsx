export default function Dynamic020({ routeName, seed }) {
  const score = seed * 20 + 20;
  return (
    <article className="dynamicWidget" data-dynamic="020">
      <strong>Dynamic 020</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
