export default function Dynamic038({ routeName, seed }) {
  const score = seed * 38 + 38;
  return (
    <article className="dynamicWidget" data-dynamic="038">
      <strong>Dynamic 038</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
