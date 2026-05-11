export default function Shared009({ active }) {
  const value = '009'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="009">S009:{value}</span>;
}
