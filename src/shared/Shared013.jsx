export default function Shared013({ active }) {
  const value = '013'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="013">S013:{value}</span>;
}
