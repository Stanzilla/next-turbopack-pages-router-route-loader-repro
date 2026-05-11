export default function Shared053({ active }) {
  const value = '053'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="053">S053:{value}</span>;
}
