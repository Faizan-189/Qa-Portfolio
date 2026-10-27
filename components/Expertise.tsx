import { FileCheck, Code2, Database, Activity } from 'lucide-react';

const expertiseData = [
  {
    icon: <FileCheck size={22} color="#2563eb" />,
    title: 'Manual Testing',
    description: 'Comprehensive test case design, functional testing, regression testing, smoke & sanity testing, and exploratory testing across web and mobile platforms.',
    tags: ['Functional Testing', 'Regression Testing', 'Smoke & Sanity', 'Exploratory Testing', 'Test Case Design', 'UAT'],
  },
  {
    icon: <Code2 size={22} color="#2563eb" />,
    title: 'Automation Testing',
    description: 'Building robust test automation frameworks using Playwright and Playwright MCP. AI-assisted test automation with Claude Code and Antigravity.',
    tags: ['Playwright', 'Playwright MCP', 'Claude Code', 'Antigravity', 'Automation Framework Design', 'E2E Testing'],
  },
  {
    icon: <Database size={22} color="#2563eb" />,
    title: 'API Testing',
    description: 'REST API validation using Postman, request/response validation, status code verification, and endpoint reliability testing.',
    tags: ['REST API Testing', 'Postman', 'Request/Response Validation', 'Endpoint Testing', 'JSON Validation'],
  },
  {
    icon: <Activity size={22} color="#2563eb" />,
    title: 'Web & Mobile Testing',
    description: 'Cross-browser testing, mobile application testing on iOS and Android with Appium, and performance testing using JMeter.',
    tags: ['Mobile App Testing', 'Appium', 'Cross-Browser Testing', 'UI/UX Testing', 'JMeter', 'Agile/Scrum'],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" style={{ padding: '96px 0', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Testing Expertise</h2>
        <div className="section-accent" style={{ marginBottom: 56 }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="expertise-grid">
          {expertiseData.map((item) => (
            <div key={item.title} className="expertise-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  background: 'rgba(37,99,235,0.1)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>{item.title}</h3>
              </div>

              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7, marginBottom: 20 }}>
                {item.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {item.tags.map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
