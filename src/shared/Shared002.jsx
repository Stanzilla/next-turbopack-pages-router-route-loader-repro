export default function Shared002({ active }) {
  const value = '002'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="002">S002:{value}</span>;
}
