export default function Dynamic004({ routeName, seed }) {
  const score = seed * 4 + 4;
  return (
    <article className="dynamicWidget" data-dynamic="004">
      <strong>Dynamic 004</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
