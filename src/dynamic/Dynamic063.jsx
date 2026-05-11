export default function Dynamic063({ routeName, seed }) {
  const score = seed * 63 + 63;
  return (
    <article className="dynamicWidget" data-dynamic="063">
      <strong>Dynamic 063</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
