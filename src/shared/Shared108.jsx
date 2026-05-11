export default function Shared108({ active }) {
  const value = '108'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="108">S108:{value}</span>;
}
