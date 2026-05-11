export default function Dynamic035({ routeName, seed }) {
  const score = seed * 35 + 35;
  return (
    <article className="dynamicWidget" data-dynamic="035">
      <strong>Dynamic 035</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
