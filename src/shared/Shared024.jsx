export default function Shared024({ active }) {
  const value = '024'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="024">S024:{value}</span>;
}
