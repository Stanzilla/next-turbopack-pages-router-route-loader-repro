export default function Shared020({ active }) {
  const value = '020'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="020">S020:{value}</span>;
}
