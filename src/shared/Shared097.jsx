export default function Shared097({ active }) {
  const value = '097'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="097">S097:{value}</span>;
}
