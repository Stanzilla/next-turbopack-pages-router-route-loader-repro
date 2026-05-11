export default function Dynamic069({ routeName, seed }) {
  const score = seed * 69 + 69;
  return (
    <article className="dynamicWidget" data-dynamic="069">
      <strong>Dynamic 069</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
