export default function Shared040({ active }) {
  const value = '040'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="040">S040:{value}</span>;
}
