export default function Shared021({ active }) {
  const value = '021'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="021">S021:{value}</span>;
}
