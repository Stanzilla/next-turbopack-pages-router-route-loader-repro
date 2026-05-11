export default function Shared031({ active }) {
  const value = '031'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="031">S031:{value}</span>;
}
