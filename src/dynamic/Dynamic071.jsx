export default function Dynamic071({ routeName, seed }) {
  const score = seed * 71 + 71;
  return (
    <article className="dynamicWidget" data-dynamic="071">
      <strong>Dynamic 071</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
