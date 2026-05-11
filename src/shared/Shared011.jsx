export default function Shared011({ active }) {
  const value = '011'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="011">S011:{value}</span>;
}
