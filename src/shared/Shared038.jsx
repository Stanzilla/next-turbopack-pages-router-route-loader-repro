export default function Shared038({ active }) {
  const value = '038'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="038">S038:{value}</span>;
}
