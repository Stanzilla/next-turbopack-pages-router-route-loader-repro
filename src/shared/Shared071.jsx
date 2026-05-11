export default function Shared071({ active }) {
  const value = '071'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="071">S071:{value}</span>;
}
