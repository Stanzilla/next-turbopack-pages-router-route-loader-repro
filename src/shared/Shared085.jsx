export default function Shared085({ active }) {
  const value = '085'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="085">S085:{value}</span>;
}
