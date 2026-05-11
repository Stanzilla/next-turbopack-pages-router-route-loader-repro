export default function Shared049({ active }) {
  const value = '049'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="049">S049:{value}</span>;
}
