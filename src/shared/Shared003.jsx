export default function Shared003({ active }) {
  const value = '003'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="003">S003:{value}</span>;
}
