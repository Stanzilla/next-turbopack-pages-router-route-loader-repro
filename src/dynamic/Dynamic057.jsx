export default function Dynamic057({ routeName, seed }) {
  const score = seed * 57 + 57;
  return (
    <article className="dynamicWidget" data-dynamic="057">
      <strong>Dynamic 057</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
