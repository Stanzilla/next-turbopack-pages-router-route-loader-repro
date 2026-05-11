export default function Shared004({ active }) {
  const value = '004'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="004">S004:{value}</span>;
}
