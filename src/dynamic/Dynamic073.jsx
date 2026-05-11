export default function Dynamic073({ routeName, seed }) {
  const score = seed * 73 + 73;
  return (
    <article className="dynamicWidget" data-dynamic="073">
      <strong>Dynamic 073</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
