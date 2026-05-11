export default function Shared030({ active }) {
  const value = '030'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="030">S030:{value}</span>;
}
