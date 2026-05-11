export default function Shared022({ active }) {
  const value = '022'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="022">S022:{value}</span>;
}
