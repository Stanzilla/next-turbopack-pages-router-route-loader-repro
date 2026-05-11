export default function Dynamic026({ routeName, seed }) {
  const score = seed * 26 + 26;
  return (
    <article className="dynamicWidget" data-dynamic="026">
      <strong>Dynamic 026</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
