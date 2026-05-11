export default function Dynamic010({ routeName, seed }) {
  const score = seed * 10 + 10;
  return (
    <article className="dynamicWidget" data-dynamic="010">
      <strong>Dynamic 010</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
