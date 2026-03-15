import { Award, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'ISTQB Certified Tester Foundation Level (CTFL)',
    issuer: 'International Software Testing Qualifications Board',
    credentialId: 'ISTQB-CTFL-2021-12345',
    year: '2021',
    url: '#',
  },
  {
    title: 'Certified Selenium Professional',
    issuer: 'Selenium Academy',
    credentialId: 'SEL-PRO-2022-67890',
    year: '2022',
    url: '#',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    credentialId: 'AWS-CCP-2023-11223',
    year: '2023',
    url: '#',
  },
  {
    title: 'Certified Agile Tester (CAT)',
    issuer: 'iSQI Group',
    credentialId: 'CAT-2023-44556',
    year: '2023',
    url: '#',
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
            <div key={cert.credentialId} className="cert-card">
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
                <span style={{ fontSize: 13, color: '#666' }}>{cert.year}</span>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{cert.title}</h3>
              <p style={{ fontSize: 13, color: '#666', marginBottom: 16 }}>{cert.issuer}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: '#555', fontFamily: 'JetBrains Mono, monospace' }}>{cert.credentialId}</span>
                <a
                  href={cert.url}
                  style={{ color: '#2563eb', display: 'flex', alignItems: 'center' }}
                  aria-label="View certificate"
                >
                  <ExternalLink size={15} />
                </a>
              </div>
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
