export default function Shared017({ active }) {
  const value = '017'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="017">S017:{value}</span>;
}
