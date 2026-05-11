export default function Shared077({ active }) {
  const value = '077'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="077">S077:{value}</span>;
}
