import Link from 'next/link';
import '../src/styles.css';
import { SharedWidgets } from '../src/shared/index.js';

const navItems = [
  ['Home', '/home'],
  ['Track', '/track?cp=main_navigation'],
  ['Play', '/play'],
  ['Feed', '/social-feed'],
  ['Shop', '/shop'],
  ['Rank', '/cs2/rank']
];

export default function App({ Component, pageProps }) {
  return (
    <div className="appShell">
      <aside className="sidebar">
        <strong>Repro Nav</strong>
        <nav>
          {navItems.map(([label, href]) => (
            <Link key={label} href={href} className="navLink" prefetch={false}>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main>
        <div className="sharedRail" aria-hidden="true">
          {SharedWidgets.map((SharedWidget, index) => (
            <SharedWidget key={index} active={index % 3 === 0} />
          ))}
        </div>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
