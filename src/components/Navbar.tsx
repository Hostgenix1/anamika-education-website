import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Migration', href: '#migration' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="flex items-center gap-2 text-brand-700 font-bold text-xl tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            <span className="rounded bg-brand-100 px-2 py-0.5 text-brand-700 text-xs font-semibold uppercase">
              AE
            </span>
            Anamika Education &amp; Migration
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-600 text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors shadow-sm hover:shadow-brand-500/40"
            >
              Get Started
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Open mobile menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-brand-600 text-center hover:bg-brand-700"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
