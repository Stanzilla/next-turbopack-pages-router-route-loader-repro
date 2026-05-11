export default function Dynamic049({ routeName, seed }) {
  const score = seed * 49 + 49;
  return (
    <article className="dynamicWidget" data-dynamic="049">
      <strong>Dynamic 049</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
