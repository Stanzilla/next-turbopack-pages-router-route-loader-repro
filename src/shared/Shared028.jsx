export default function Shared028({ active }) {
  const value = '028'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="028">S028:{value}</span>;
}
