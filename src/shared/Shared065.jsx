export default function Shared065({ active }) {
  const value = '065'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="065">S065:{value}</span>;
}
