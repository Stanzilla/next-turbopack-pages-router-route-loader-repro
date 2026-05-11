export default function Shared068({ active }) {
  const value = '068'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="068">S068:{value}</span>;
}
