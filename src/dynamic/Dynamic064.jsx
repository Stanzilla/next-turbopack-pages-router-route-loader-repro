export default function Dynamic064({ routeName, seed }) {
  const score = seed * 64 + 64;
  return (
    <article className="dynamicWidget" data-dynamic="064">
      <strong>Dynamic 064</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
