export default function Shared010({ active }) {
  const value = '010'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="010">S010:{value}</span>;
}
