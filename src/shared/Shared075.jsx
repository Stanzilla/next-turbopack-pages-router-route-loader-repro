export default function Shared075({ active }) {
  const value = '075'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="075">S075:{value}</span>;
}
