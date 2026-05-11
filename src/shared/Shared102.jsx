export default function Shared102({ active }) {
  const value = '102'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="102">S102:{value}</span>;
}
