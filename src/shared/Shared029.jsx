export default function Shared029({ active }) {
  const value = '029'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="029">S029:{value}</span>;
}
