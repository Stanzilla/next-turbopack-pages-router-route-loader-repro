export default function Shared033({ active }) {
  const value = '033'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="033">S033:{value}</span>;
}
