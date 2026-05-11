export default function Shared088({ active }) {
  const value = '088'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="088">S088:{value}</span>;
}
