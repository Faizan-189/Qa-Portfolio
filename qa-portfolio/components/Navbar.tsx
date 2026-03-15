'use client';
import { useState, useEffect } from 'react';

const navItems = ['About', 'Expertise', 'Projects', 'Tools', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(13,13,13,0.95)' : 'rgba(13,13,13,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #2a2a2a' : '1px solid transparent',
        transition: 'all 0.3s',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <span style={{ color: '#fff', fontSize: 18, fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>
            {'<'}
            <span style={{ color: '#fff' }}>QA</span>
            {' />'}
          </span>
        </button>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="nav-link"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 8 }}
        >
          <div style={{ width: 22, height: 2, background: '#fff', marginBottom: 5, borderRadius: 1 }} />
          <div style={{ width: 22, height: 2, background: '#fff', marginBottom: 5, borderRadius: 1 }} />
          <div style={{ width: 22, height: 2, background: '#fff', borderRadius: 1 }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#161616', borderTop: '1px solid #2a2a2a', padding: '16px 24px' }}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', color: '#a0a0a0', fontSize: 15, padding: '12px 0', cursor: 'pointer', borderBottom: '1px solid #2a2a2a' }}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
