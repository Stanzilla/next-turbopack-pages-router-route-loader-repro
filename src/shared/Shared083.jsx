export default function Shared083({ active }) {
  const value = '083'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="083">S083:{value}</span>;
}
