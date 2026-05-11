export default function Shared036({ active }) {
  const value = '036'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="036">S036:{value}</span>;
}
