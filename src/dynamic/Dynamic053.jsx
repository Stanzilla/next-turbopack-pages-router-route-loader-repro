export default function Dynamic053({ routeName, seed }) {
  const score = seed * 53 + 53;
  return (
    <article className="dynamicWidget" data-dynamic="053">
      <strong>Dynamic 053</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
