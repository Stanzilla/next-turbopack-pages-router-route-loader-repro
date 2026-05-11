export default function Shared005({ active }) {
  const value = '005'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="005">S005:{value}</span>;
}
