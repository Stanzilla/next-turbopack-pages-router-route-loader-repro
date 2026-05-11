export default function Dynamic018({ routeName, seed }) {
  const score = seed * 18 + 18;
  return (
    <article className="dynamicWidget" data-dynamic="018">
      <strong>Dynamic 018</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
