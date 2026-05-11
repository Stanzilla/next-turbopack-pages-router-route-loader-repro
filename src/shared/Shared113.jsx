export default function Shared113({ active }) {
  const value = '113'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="113">S113:{value}</span>;
}
