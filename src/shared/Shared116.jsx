export default function Shared116({ active }) {
  const value = '116'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="116">S116:{value}</span>;
}
