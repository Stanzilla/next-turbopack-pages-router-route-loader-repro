export default function Shared034({ active }) {
  const value = '034'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="034">S034:{value}</span>;
}
