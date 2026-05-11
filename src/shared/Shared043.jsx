export default function Shared043({ active }) {
  const value = '043'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="043">S043:{value}</span>;
}
