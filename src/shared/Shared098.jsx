export default function Shared098({ active }) {
  const value = '098'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="098">S098:{value}</span>;
}
