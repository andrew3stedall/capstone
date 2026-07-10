"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Readiness", icon: "⌂" },
  { href: "/learn", label: "Learn", icon: "▤" },
  { href: "/practice", label: "Practice", icon: "✎" },
  { href: "/simulate", label: "Simulate", icon: "⌁" },
  { href: "/review", label: "Review", icon: "↻" },
  { href: "/mock", label: "Mock", icon: "✓" },
  { href: "/progress", label: "Progress", icon: "↗" },
  { href: "/reference", label: "Reference", icon: "≡" },
];

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <aside className="sidebar">
        <Link className="brand" href="/" aria-label="Capstone Ready home">
          <span className="brand-mark" aria-hidden="true">ϟ</span>
          <span>Capstone <b>Ready</b></span>
        </Link>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
              <span aria-hidden="true">{item.icon}</span><span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-study">
          <strong>7 day streak</strong>
          <span>Consistency matters more than cramming.</span>
        </div>
      </aside>

      <div className="content-shell">
        <header className="topbar">
          <span><b>12 weeks</b> to target date</span>
          <span className="topbar-divider" aria-hidden="true" />
          <span>36 minutes studied today</span>
          <span className="topbar-spacer" />
          <label>Jurisdiction <select defaultValue="NSW" aria-label="Jurisdiction"><option>ACT</option><option>NSW</option><option>NT</option><option>QLD</option><option>SA</option><option>TAS</option><option>VIC</option><option>WA</option></select></label>
        </header>
        <main id="main-content" tabIndex={-1}>{children}</main>
        <footer>
          <p>Capstone Ready is an independent study resource and is not an official assessment provider.</p>
          <Link href="/reference">Sources and currency</Link>
        </footer>
      </div>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navigation.slice(0, 5).map((item) => (
          <Link key={item.href} href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}><span aria-hidden="true">{item.icon}</span>{item.label}</Link>
        ))}
      </nav>
    </div>
  );
}
