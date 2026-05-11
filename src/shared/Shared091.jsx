export default function Shared091({ active }) {
  const value = '091'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="091">S091:{value}</span>;
}
