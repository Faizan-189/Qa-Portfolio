'use client';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background gradient */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div>
            {/* Available badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(37,99,235,0.1)',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: 20,
              padding: '6px 14px',
              marginBottom: 28,
            }}>
              <div style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#22c55e',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              <span style={{ fontSize: 13, color: '#a0a0a0', fontFamily: 'JetBrains Mono, monospace' }}>
                Available for opportunities
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Quality is not an act,{' '}
              <br />
              <span style={{ color: '#2563eb' }}>it&apos;s a habit</span>
            </h1>

            <p style={{ fontSize: 16, color: '#a0a0a0', lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
              Ensuring software reliability through comprehensive testing strategies
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                Get in Touch
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary" onClick={() => scrollTo('projects')}>
                View Projects
              </button>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
              {[
                { icon: <CheckCircle size={18} color="#2563eb" />, label: 'Experience', value: '5+ Years' },
                { icon: <CheckCircle size={18} color="#2563eb" />, label: 'Projects Tested', value: '40+' },
              ].map((stat) => (
                <div key={stat.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ marginTop: 2 }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, color: '#666', marginBottom: 2 }}>{stat.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Code Block */}
          <div className="code-block" style={{ padding: 28, position: 'relative' }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            </div>
            <pre style={{ fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre', overflowX: 'auto' }}>
              <span className="token-comment">{'// Quality Assurance Process'}</span>
              {'\n\n'}
              <span className="token-const">const</span>
              {' '}
              <span className="token-value">testStrategy</span>
              {' = {\n'}
              {'  '}
              <span className="token-property">planning</span>
              {': '}
              <span className="token-const">true</span>
              {',\n'}
              {'  '}
              <span className="token-property">execution</span>
              {': '}
              <span className="token-const">true</span>
              {',\n'}
              {'  '}
              <span className="token-property">automation</span>
              {': '}
              <span className="token-const">true</span>
              {',\n'}
              {'  '}
              <span className="token-property">coverage</span>
              {': '}
              <span className="token-string">{`'85%'`}</span>
              {',\n'}
              {'  '}
              <span className="token-property">defects</span>
              {': '}
              <span className="token-number">0</span>
              {'\n};\n'}
            </pre>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
