export default function Shared118({ active }) {
  const value = '118'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="118">S118:{value}</span>;
}
