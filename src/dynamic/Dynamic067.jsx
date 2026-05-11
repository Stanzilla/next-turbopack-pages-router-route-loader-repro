export default function Dynamic067({ routeName, seed }) {
  const score = seed * 67 + 67;
  return (
    <article className="dynamicWidget" data-dynamic="067">
      <strong>Dynamic 067</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
