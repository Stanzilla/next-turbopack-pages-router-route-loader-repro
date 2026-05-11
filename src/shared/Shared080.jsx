export default function Shared080({ active }) {
  const value = '080'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="080">S080:{value}</span>;
}
