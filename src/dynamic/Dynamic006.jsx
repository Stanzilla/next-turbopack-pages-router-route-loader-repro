export default function Dynamic006({ routeName, seed }) {
  const score = seed * 6 + 6;
  return (
    <article className="dynamicWidget" data-dynamic="006">
      <strong>Dynamic 006</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
