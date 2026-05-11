export default function Shared079({ active }) {
  const value = '079'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="079">S079:{value}</span>;
}
