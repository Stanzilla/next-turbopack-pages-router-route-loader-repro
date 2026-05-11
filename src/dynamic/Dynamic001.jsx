export default function Dynamic001({ routeName, seed }) {
  const score = seed * 1 + 1;
  return (
    <article className="dynamicWidget" data-dynamic="001">
      <strong>Dynamic 001</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
