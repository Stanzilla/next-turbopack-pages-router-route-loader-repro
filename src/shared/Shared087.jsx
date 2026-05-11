export default function Shared087({ active }) {
  const value = '087'.split('').reduce((total, char) => total + char.charCodeAt(0), active ? 1000 : 0);
  return <span className="sharedBadge" data-shared="087">S087:{value}</span>;
}
