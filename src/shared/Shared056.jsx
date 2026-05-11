export default function Shared056({ active }) {
  const value = '056'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="056">S056:{value}</span>;
}
