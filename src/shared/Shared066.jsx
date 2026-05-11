export default function Shared066({ active }) {
  const value = '066'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="066">S066:{value}</span>;
}
