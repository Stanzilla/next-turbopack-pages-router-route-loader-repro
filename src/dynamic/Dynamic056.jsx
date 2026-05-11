export default function Dynamic056({ routeName, seed }) {
  const score = seed * 56 + 56;
  return (
    <article className="dynamicWidget" data-dynamic="056">
      <strong>Dynamic 056</strong>
      <span>{routeName}</span>
      <span>{score}</span>
    </article>
  );
}
