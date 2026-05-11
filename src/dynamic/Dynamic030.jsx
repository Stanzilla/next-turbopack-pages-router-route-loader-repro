export default function Dynamic030({ routeName, seed }) {
  const score = seed * 30 + 30;
  return (
    <article className="dynamicWidget" data-dynamic="030">
      <strong>Dynamic 030</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
