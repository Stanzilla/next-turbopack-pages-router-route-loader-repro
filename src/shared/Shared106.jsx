export default function Shared106({ active }) {
  const value = '106'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="106">S106:{value}</span>;
}
