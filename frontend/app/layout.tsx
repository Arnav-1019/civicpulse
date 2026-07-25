import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'CivicPulse | Action-First Civic Infrastructure',
  description: 'Direct community action platform connecting citizens and NGOs to solve urban problems in 48 hours.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-teal-500 selection:text-slate-950">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
          <Link className="text-2xl font-black bg-gradient-to-r from-teal-400 via-yellow-400 to-rose-500 bg-clip-text text-transparent" href="/">
            CivicPulse
          </Link>
          <nav className="flex gap-6 items-center font-semibold text-sm">
            <Link className="hover:text-teal-400 transition-colors" href="/">Home</Link>
            <Link className="hover:text-teal-400 transition-colors" href="/feed">Live Feed</Link>
            <Link className="px-4 py-2 rounded-full bg-teal-400 text-slate-950 font-bold hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20" href="/report">
              + Report Issue
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
