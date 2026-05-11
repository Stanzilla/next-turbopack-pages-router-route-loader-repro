export default function Shared041({ active }) {
  const value = '041'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="041">S041:{value}</span>;
}
