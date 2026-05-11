export default function Shared059({ active }) {
  const value = '059'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="059">S059:{value}</span>;
}
