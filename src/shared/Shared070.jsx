export default function Shared070({ active }) {
  const value = '070'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="070">S070:{value}</span>;
}
