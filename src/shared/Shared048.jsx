export default function Shared048({ active }) {
  const value = '048'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="048">S048:{value}</span>;
}
