export default function Shared060({ active }) {
  const value = '060'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="060">S060:{value}</span>;
}
