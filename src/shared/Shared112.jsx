export default function Shared112({ active }) {
  const value = '112'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="112">S112:{value}</span>;
}
