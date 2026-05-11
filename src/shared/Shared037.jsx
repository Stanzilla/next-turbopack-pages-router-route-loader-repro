export default function Shared037({ active }) {
  const value = '037'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="037">S037:{value}</span>;
}
