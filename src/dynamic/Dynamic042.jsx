export default function Dynamic042({ routeName, seed }) {
  const score = seed * 42 + 42;
  return (
    <article className="dynamicWidget" data-dynamic="042">
      <strong>Dynamic 042</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
