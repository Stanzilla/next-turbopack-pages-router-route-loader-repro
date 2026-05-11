export default function Shared093({ active }) {
  const value = '093'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="093">S093:{value}</span>;
}
