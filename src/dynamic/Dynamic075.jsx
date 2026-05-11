export default function Dynamic075({ routeName, seed }) {
  const score = seed * 75 + 75;
  return (
    <article className="dynamicWidget" data-dynamic="075">
      <strong>Dynamic 075</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
