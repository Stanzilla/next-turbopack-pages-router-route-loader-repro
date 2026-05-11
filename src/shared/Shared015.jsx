export default function Shared015({ active }) {
  const value = '015'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="015">S015:{value}</span>;
}
