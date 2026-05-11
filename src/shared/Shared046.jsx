export default function Shared046({ active }) {
  const value = '046'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="046">S046:{value}</span>;
}
