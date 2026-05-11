export default function Shared001({ active }) {
  const value = '001'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="001">S001:{value}</span>;
}
