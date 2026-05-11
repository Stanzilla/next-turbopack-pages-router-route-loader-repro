export default function Dynamic062({ routeName, seed }) {
  const score = seed * 62 + 62;
  return (
    <article className="dynamicWidget" data-dynamic="062">
      <strong>Dynamic 062</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
