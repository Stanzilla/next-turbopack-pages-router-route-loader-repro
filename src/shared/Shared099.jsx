export default function Shared099({ active }) {
  const value = '099'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="099">S099:{value}</span>;
}
