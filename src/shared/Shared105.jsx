export default function Shared105({ active }) {
  const value = '105'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="105">S105:{value}</span>;
}
