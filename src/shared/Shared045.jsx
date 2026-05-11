export default function Shared045({ active }) {
  const value = '045'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="045">S045:{value}</span>;
}
