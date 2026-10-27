import { Award } from 'lucide-react';

const certs = [
  {
    title: 'AI in Software Testing (Manual & Automation)',
    issuer: 'Hands-on training in applying Artificial Intelligence techniques to both manual and automated testing workflows, covering AI-driven test generation, smart defect detection, and automation strategy.',
    year: 'Certified',
  },
  {
    title: 'C++ Programming',
    issuer: 'Core programming fundamentals including data structures, object-oriented concepts, and logical problem-solving.',
    year: 'Certified',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '96px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Certifications</h2>
        <div className="section-accent" style={{ marginBottom: 16 }} />
        <p style={{ fontSize: 15, color: '#888', marginBottom: 48 }}>
          Professional certifications demonstrating expertise and commitment to quality standards.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }} className="cert-grid">
          {certs.map((cert) => (
            <div key={cert.title} className="cert-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  background: 'rgba(37,99,235,0.1)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Award size={20} color="#2563eb" />
                </div>
                <span style={{ fontSize: 13, color: '#2563eb', fontWeight: 600 }}>{cert.year}</span>
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{cert.title}</h3>
              <p style={{ fontSize: 13, color: '#999', lineHeight: 1.6 }}>{cert.issuer}</p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '20px 32px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 14, color: '#555', fontStyle: 'italic' }}>
            Continuously learning and staying updated with the latest testing tools, methodologies, and industry best practices.
          </p>
        </div>
      </div>

      <style>{`
        .cert-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 640px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
