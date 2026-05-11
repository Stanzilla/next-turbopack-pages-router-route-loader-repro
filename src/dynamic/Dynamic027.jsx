export default function Dynamic027({ routeName, seed }) {
  const score = seed * 27 + 27;
  return (
    <article className="dynamicWidget" data-dynamic="027">
      <strong>Dynamic 027</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
