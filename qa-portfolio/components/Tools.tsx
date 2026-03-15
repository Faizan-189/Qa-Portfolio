'use client';
import { useState } from 'react';

const categories = ['All Tools', 'Automation', 'API Testing', 'Performance', 'CI/CD', 'Management', 'Languages'];

const tools: { name: string; category: string }[] = [
  { name: 'Selenium WebDriver', category: 'Automation' },
  { name: 'Playwright', category: 'Automation' },
  { name: 'Cypress', category: 'Automation' },
  { name: 'Appium', category: 'Automation' },
  { name: 'TestNG', category: 'Automation' },
  { name: 'JUnit', category: 'Automation' },
  { name: 'PyTest', category: 'Automation' },
  { name: 'Postman', category: 'API Testing' },
  { name: 'RestAssured', category: 'API Testing' },
  { name: 'Newman', category: 'API Testing' },
  { name: 'SoapUI', category: 'API Testing' },
  { name: 'JMeter', category: 'Performance' },
  { name: 'LoadRunner', category: 'Performance' },
  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'GitHub Actions', category: 'CI/CD' },
  { name: 'GitLab CI', category: 'CI/CD' },
  { name: 'Docker', category: 'CI/CD' },
  { name: 'JIRA', category: 'Management' },
  { name: 'TestRail', category: 'Management' },
  { name: 'Zephyr', category: 'Management' },
  { name: 'Git', category: 'Management' },
  { name: 'Confluence', category: 'Management' },
  { name: 'Java', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
];

const methodologies = {
  'Testing Types': ['Functional Testing', 'Regression Testing', 'Smoke & Sanity Testing', 'Integration Testing', 'UAT Coordination'],
  'Methodologies': ['Agile/Scrum', 'Waterfall', 'Risk-Based Testing', 'Shift-Left Testing', 'Exploratory Testing'],
  'Frameworks': ['Page Object Model (POM)', 'Data-Driven Testing', 'Keyword-Driven Testing', 'Behavior-Driven Dev (BDD)', 'Test-Driven Dev (TDD)'],
};

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState('All Tools');

  const filtered = activeCategory === 'All Tools'
    ? tools
    : tools.filter((t) => t.category === activeCategory);

  return (
    <section id="tools" style={{ padding: '96px 0', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Tools & Tech Stack</h2>
        <div className="section-accent" style={{ marginBottom: 16 }} />
        <p style={{ fontSize: 15, color: '#888', marginBottom: 48, maxWidth: 600 }}>
          Comprehensive toolkit for test automation, API validation, performance testing, and continuous integration.
        </p>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 56 }} className="tools-grid">
          {filtered.map((tool) => (
            <div key={tool.name} className="tool-chip">
              {tool.name}
            </div>
          ))}
        </div>

        {/* Methodologies */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: 32,
        }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 28 }}>Testing Methodologies</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="methods-grid">
            {Object.entries(methodologies).map(([title, items]) => (
              <div key={title}>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: '#2563eb', marginBottom: 14 }}>{title}</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {items.map((item) => (
                    <li key={item} style={{ fontSize: 13, color: '#888', marginBottom: 8, display: 'flex', gap: 6 }}>
                      <span style={{ color: '#555' }}>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .tools-grid { grid-template-columns: repeat(6, 1fr) !important; }
        .methods-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 1024px) {
          .tools-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .tools-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .methods-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
