export default function Dynamic068({ routeName, seed }) {
  const score = seed * 68 + 68;
  return (
    <article className="dynamicWidget" data-dynamic="068">
      <strong>Dynamic 068</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
