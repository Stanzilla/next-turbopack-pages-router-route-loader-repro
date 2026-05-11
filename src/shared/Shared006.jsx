export default function Shared006({ active }) {
  const value = '006'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="006">S006:{value}</span>;
}
