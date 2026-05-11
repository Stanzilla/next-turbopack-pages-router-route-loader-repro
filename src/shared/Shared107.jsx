export default function Shared107({ active }) {
  const value = '107'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="107">S107:{value}</span>;
}
