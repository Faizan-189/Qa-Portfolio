'use client';
import { useState } from 'react';

const categories = ['All Tools', 'Testing Tools', 'Mobile & Automation', 'Project Management', 'Languages'];

const tools: { name: string; category: string }[] = [
  { name: 'Playwright', category: 'Testing Tools' },
  { name: 'Playwright MCP', category: 'Mobile & Automation' },
  { name: 'Claude Code', category: 'Testing Tools' },
  { name: 'Antigravity', category: 'Testing Tools' },
  { name: 'Postman', category: 'Testing Tools' },
  { name: 'JMeter', category: 'Testing Tools' },
  { name: 'Appium', category: 'Mobile & Automation' },
  { name: 'Jira', category: 'Project Management' },
  { name: 'Trello', category: 'Project Management' },
  { name: 'Linear', category: 'Project Management' },
  { name: 'C++', category: 'Languages' },
];

const technicalSkills = {
  'Automation & Manual Testing': [
    'Automation Framework Design',
    'Functional Testing',
    'Regression Testing',
    'Smoke & Sanity Testing',
    'Exploratory Testing',
    'End-to-End Testing (E2E)',
  ],
  'API, Mobile & Web QA': [
    'REST API Testing & Postman',
    'Request/Response Validation',
    'Mobile App Testing',
    'Cross-Browser Testing',
    'UI/UX Testing',
    'User Acceptance Testing (UAT)',
  ],
  'Management & Analysis': [
    'Test Case Design & Planning',
    'Test Documentation & Bug Reporting',
    'Root Cause Analysis',
    'Bug Reproduction',
    'Console & Network Log Analysis',
    'Agile/Scrum',
  ],
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
          Testing tools, platforms, and technical methodologies directly utilized across QA workflows.
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 56 }} className="tools-grid">
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
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 28 }}>Technical Skills & QA Competencies</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="methods-grid">
            {Object.entries(technicalSkills).map(([title, items]) => (
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
        .tools-grid { grid-template-columns: repeat(4, 1fr) !important; }
        .methods-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 1024px) {
          .tools-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .methods-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
