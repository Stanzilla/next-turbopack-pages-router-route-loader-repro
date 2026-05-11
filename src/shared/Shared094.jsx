export default function Shared094({ active }) {
  const value = '094'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="094">S094:{value}</span>;
}
