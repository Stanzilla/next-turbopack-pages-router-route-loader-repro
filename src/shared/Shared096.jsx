export default function Shared096({ active }) {
  const value = '096'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="096">S096:{value}</span>;
}
