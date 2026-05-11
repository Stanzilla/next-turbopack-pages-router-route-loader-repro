export default function Shared064({ active }) {
  const value = '064'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="064">S064:{value}</span>;
}
