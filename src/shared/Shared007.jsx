export default function Shared007({ active }) {
  const value = '007'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="007">S007:{value}</span>;
}
