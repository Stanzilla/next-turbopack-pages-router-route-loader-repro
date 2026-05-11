export default function Shared090({ active }) {
  const value = '090'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="090">S090:{value}</span>;
}
