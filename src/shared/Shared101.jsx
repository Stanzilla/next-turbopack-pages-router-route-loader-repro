export default function Shared101({ active }) {
  const value = '101'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="101">S101:{value}</span>;
}
