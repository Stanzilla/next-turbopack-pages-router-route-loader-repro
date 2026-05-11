export default function Dynamic046({ routeName, seed }) {
  const score = seed * 46 + 46;
  return (
    <article className="dynamicWidget" data-dynamic="046">
      <strong>Dynamic 046</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
