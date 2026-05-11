export default function Shared026({ active }) {
  const value = '026'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="026">S026:{value}</span>;
}
