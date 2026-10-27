import { FileCheck, Code2, Database, Activity } from 'lucide-react';

const expertiseData = [
  {
    icon: <FileCheck size={22} color="#2563eb" />,
    title: 'Manual Testing',
    description: 'Comprehensive test case design, exploratory testing, regression testing, and UAT coordination. Expert in black-box, white-box, and grey-box testing methodologies.',
    tags: ['Test Case Design', 'Exploratory Testing', 'Regression Testing', 'UAT', 'Boundary Value Analysis', 'Equivalence Partitioning'],
  },
  {
    icon: <Code2 size={22} color="#2563eb" />,
    title: 'Automation Testing',
    description: 'Building robust test automation frameworks using Selenium, Playwright, and Cypress. Data-driven and keyword-driven testing with POM design patterns.',
    tags: ['Selenium WebDriver', 'Playwright', 'Cypress', 'TestNG', 'JUnit', 'Page Object Model', 'Data-Driven Testing'],
  },
  {
    icon: <Database size={22} color="#2563eb" />,
    title: 'API Testing',
    description: 'REST and SOAP API validation using Postman, RestAssured, and automated contract testing. Performance and security testing for API endpoints.',
    tags: ['Postman', 'RestAssured', 'Newman', 'API Contract Testing', 'JSON/XML Validation', 'Authentication Testing'],
  },
  {
    icon: <Activity size={22} color="#2563eb" />,
    title: 'Performance & CI/CD',
    description: 'Basic performance testing with JMeter, load testing strategies, and integration of automated tests into CI/CD pipelines using Jenkins and GitHub Actions.',
    tags: ['JMeter', 'Jenkins', 'GitHub Actions', 'Docker', 'Test Reporting', 'Continuous Testing'],
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
