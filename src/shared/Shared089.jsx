export default function Shared089({ active }) {
  const value = '089'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="089">S089:{value}</span>;
}
