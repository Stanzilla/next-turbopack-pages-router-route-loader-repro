export default function Shared047({ active }) {
  const value = '047'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="047">S047:{value}</span>;
}
