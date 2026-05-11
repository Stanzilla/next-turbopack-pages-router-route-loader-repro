export default function Shared055({ active }) {
  const value = '055'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="055">S055:{value}</span>;
}
