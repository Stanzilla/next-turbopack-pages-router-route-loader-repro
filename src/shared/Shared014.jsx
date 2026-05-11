export default function Shared014({ active }) {
  const value = '014'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="014">S014:{value}</span>;
}
