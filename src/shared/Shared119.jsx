export default function Shared119({ active }) {
  const value = '119'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="119">S119:{value}</span>;
}
