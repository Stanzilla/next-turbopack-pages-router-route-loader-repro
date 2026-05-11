export default function Shared082({ active }) {
  const value = '082'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="082">S082:{value}</span>;
}
