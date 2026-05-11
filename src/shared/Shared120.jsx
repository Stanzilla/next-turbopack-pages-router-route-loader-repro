export default function Shared120({ active }) {
  const value = '120'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="120">S120:{value}</span>;
}
