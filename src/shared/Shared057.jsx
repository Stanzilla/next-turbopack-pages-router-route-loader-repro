export default function Shared057({ active }) {
  const value = '057'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="057">S057:{value}</span>;
}
