export default function Shared032({ active }) {
  const value = '032'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="032">S032:{value}</span>;
}
