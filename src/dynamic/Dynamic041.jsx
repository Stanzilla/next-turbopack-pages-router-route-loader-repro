export default function Dynamic041({ routeName, seed }) {
  const score = seed * 41 + 41;
  return (
    <article className="dynamicWidget" data-dynamic="041">
      <strong>Dynamic 041</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
