export default function Shared039({ active }) {
  const value = '039'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="039">S039:{value}</span>;
}
