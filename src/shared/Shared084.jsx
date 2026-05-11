export default function Shared084({ active }) {
  const value = '084'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="084">S084:{value}</span>;
}
