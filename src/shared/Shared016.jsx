export default function Shared016({ active }) {
  const value = '016'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="016">S016:{value}</span>;
}
