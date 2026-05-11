export default function Dynamic048({ routeName, seed }) {
  const score = seed * 48 + 48;
  return (
    <article className="dynamicWidget" data-dynamic="048">
      <strong>Dynamic 048</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
