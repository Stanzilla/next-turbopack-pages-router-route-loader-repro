export default function Dynamic051({ routeName, seed }) {
  const score = seed * 51 + 51;
  return (
    <article className="dynamicWidget" data-dynamic="051">
      <strong>Dynamic 051</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
