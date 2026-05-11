export default function Shared110({ active }) {
  const value = '110'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="110">S110:{value}</span>;
}
