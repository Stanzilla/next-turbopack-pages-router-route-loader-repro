export default function Dynamic072({ routeName, seed }) {
  const score = seed * 72 + 72;
  return (
    <article className="dynamicWidget" data-dynamic="072">
      <strong>Dynamic 072</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
