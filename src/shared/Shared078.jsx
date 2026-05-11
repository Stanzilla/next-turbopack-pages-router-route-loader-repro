export default function Shared078({ active }) {
  const value = '078'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="078">S078:{value}</span>;
}
