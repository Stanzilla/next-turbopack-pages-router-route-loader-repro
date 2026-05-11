export default function Dynamic008({ routeName, seed }) {
  const score = seed * 8 + 8;
  return (
    <article className="dynamicWidget" data-dynamic="008">
      <strong>Dynamic 008</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
