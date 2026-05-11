export default function Shared023({ active }) {
  const value = '023'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="023">S023:{value}</span>;
}
