export default function Dynamic032({ routeName, seed }) {
  const score = seed * 32 + 32;
  return (
    <article className="dynamicWidget" data-dynamic="032">
      <strong>Dynamic 032</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
