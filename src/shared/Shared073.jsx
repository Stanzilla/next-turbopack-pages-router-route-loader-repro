export default function Shared073({ active }) {
  const value = '073'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="073">S073:{value}</span>;
}
