export default function Shared069({ active }) {
  const value = '069'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="069">S069:{value}</span>;
}
