export default function Shared074({ active }) {
  const value = '074'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="074">S074:{value}</span>;
}
