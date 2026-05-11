export default function Shared012({ active }) {
  const value = '012'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="012">S012:{value}</span>;
}
