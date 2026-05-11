export default function Shared076({ active }) {
  const value = '076'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="076">S076:{value}</span>;
}
