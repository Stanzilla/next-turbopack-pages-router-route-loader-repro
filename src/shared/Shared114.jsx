export default function Shared114({ active }) {
  const value = '114'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="114">S114:{value}</span>;
}
