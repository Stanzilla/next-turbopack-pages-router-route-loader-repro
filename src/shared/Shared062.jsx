export default function Shared062({ active }) {
  const value = '062'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="062">S062:{value}</span>;
}
