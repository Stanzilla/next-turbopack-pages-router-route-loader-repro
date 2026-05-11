export default function Shared111({ active }) {
  const value = '111'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="111">S111:{value}</span>;
}
