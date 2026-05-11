export default function Shared086({ active }) {
  const value = '086'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="086">S086:{value}</span>;
}
