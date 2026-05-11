export default function Shared051({ active }) {
  const value = '051'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="051">S051:{value}</span>;
}
