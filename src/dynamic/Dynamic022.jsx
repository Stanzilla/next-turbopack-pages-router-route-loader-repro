export default function Dynamic022({ routeName, seed }) {
  const score = seed * 22 + 22;
  return (
    <article className="dynamicWidget" data-dynamic="022">
      <strong>Dynamic 022</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
