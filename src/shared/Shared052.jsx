export default function Shared052({ active }) {
  const value = '052'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="052">S052:{value}</span>;
}
