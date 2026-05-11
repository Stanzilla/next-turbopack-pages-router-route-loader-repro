export default function Shared092({ active }) {
  const value = '092'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="092">S092:{value}</span>;
}
