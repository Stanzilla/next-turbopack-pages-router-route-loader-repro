export default function Shared104({ active }) {
  const value = '104'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="104">S104:{value}</span>;
}
