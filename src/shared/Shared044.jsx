export default function Shared044({ active }) {
  const value = '044'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="044">S044:{value}</span>;
}
