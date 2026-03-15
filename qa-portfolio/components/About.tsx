import { Target, Award, TrendingUp, Users } from 'lucide-react';

const stats = [
  { icon: <Target size={24} color="#2563eb" />, value: '5+ years', label: 'Experience' },
  { icon: <Award size={24} color="#2563eb" />, value: '40+', label: 'Projects Tested' },
  { icon: <TrendingUp size={24} color="#2563eb" />, value: '2500+', label: 'Bugs Identified' },
  { icon: <Users size={24} color="#2563eb" />, value: '85%', label: 'Automation Coverage' },
];

const competencies = [
  'SDLC & STLC implementation across agile and waterfall methodologies',
  'Test strategy development and risk-based testing prioritization',
  'Automation framework design using POM and data-driven approaches',
  'Bug lifecycle management and cross-functional collaboration',
  'CI/CD pipeline integration for continuous testing',
  'Performance testing and optimization strategies',
  'Mobile and API testing across diverse platforms',
];

export default function About() {
  return (
    <section id="about" style={{ padding: '96px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>About Me</h2>
        <div className="section-accent" style={{ marginBottom: 48 }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="about-grid">
          {/* Left - Bio */}
          <div>
            <p style={{ fontSize: 15, color: '#c0c0c0', lineHeight: 1.8, marginBottom: 32 }}>
              Software Quality Assurance Engineer with 5+ years of experience in manual and automated testing across web, mobile, and API platforms. Specialized in building scalable test automation frameworks, implementing CI/CD testing pipelines, and ensuring product quality through risk-based testing methodologies. Strong advocate for shift-left testing and continuous quality improvement.
            </p>

            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Core Competencies</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {competencies.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#2563eb',
                    marginTop: 7,
                    flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 14, color: '#a0a0a0', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div style={{ marginBottom: 16 }}>{stat.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: '#666' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
