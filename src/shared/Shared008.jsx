export default function Shared008({ active }) {
  const value = '008'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="008">S008:{value}</span>;
}
