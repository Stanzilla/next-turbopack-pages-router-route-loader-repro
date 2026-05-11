export default function Dynamic002({ routeName, seed }) {
  const score = seed * 2 + 2;
  return (
    <article className="dynamicWidget" data-dynamic="002">
      <strong>Dynamic 002</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
