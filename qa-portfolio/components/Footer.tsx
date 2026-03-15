export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid #2a2a2a',
      padding: '32px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 15, fontWeight: 600, color: '#fff' }}>
          {'<QA />'}
        </span>
        <span style={{ fontSize: 13, color: '#555' }}>
          © {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </span>
        <span style={{ fontSize: 13, color: '#555' }}>
          Built with Next.js
        </span>
      </div>
    </footer>
  );
}
