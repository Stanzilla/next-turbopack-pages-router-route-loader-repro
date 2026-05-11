export default function Shared025({ active }) {
  const value = '025'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="025">S025:{value}</span>;
}
