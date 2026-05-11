export default function Shared058({ active }) {
  const value = '058'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="058">S058:{value}</span>;
}
