export default function Shared115({ active }) {
  const value = '115'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="115">S115:{value}</span>;
}
