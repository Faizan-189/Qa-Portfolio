'use client';
import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Mobile App & Multi-Domain QA',
    duration: 'May 2024 – Present',
    client: 'SoftMind Solutions',
    description: 'Led end-to-end quality assurance across Fintech mobile application, Dental Practice Management, Real Estate, and Art platforms.',
    metrics: [
      { value: '500+', label: 'Test Cases/Sprint', color: '#2563eb' },
      { value: '4+', label: 'Domains', color: '#ef4444' },
      { value: '95%', label: 'Stability', color: '#22c55e' },
      { value: '4', label: 'Core Tools', color: '#fff' },
    ],
    details: {
      challenge: 'Ensuring reliable transaction flows, user data security, and seamless UI/UX across iOS and Android mobile platforms under varied network conditions.',
      approach: 'Implemented mobile app testing and automation using Appium along with functional, regression, smoke, and exploratory testing. Designed and executed 500+ test cases per release sprint.',
      tools: ['Appium', 'Postman', 'JIRA', 'Linear'],
      outcomes: [
        '500+ test cases executed per sprint with zero critical escapes',
        'Investigated and reproduced client-reported defects with detailed root-cause logs',
        'Thorough regression and smoke testing across mobile builds',
        'Ensured full functional compliance across Fintech, Dental, and Real Estate platforms',
      ],
    },
  },
  {
    title: 'AI-Assisted Chatbot & Automation Suite',
    duration: 'May 2024 – Present',
    client: 'SoftMind Solutions',
    description: 'Used Claude Code and Playwright for AI-assisted automation, testing Chatbot conversational flows and failure scenarios.',
    metrics: [
      { value: '100%', label: 'Flows Tested', color: '#2563eb' },
      { value: 'Zero', label: 'Critical Escapes', color: '#ef4444' },
      { value: '92%', label: 'Coverage', color: '#22c55e' },
      { value: '4', label: 'AI & QA Tools', color: '#fff' },
    ],
    details: {
      challenge: 'Validating dynamic conversational flows, intent recognition, chatbot responses, and failure edge-cases across diverse user interaction scenarios.',
      approach: 'Leveraged Claude Code and Playwright for AI-assisted test automation. Designed comprehensive test suites covering chatbot logic, conversational edge-cases, and regression scenarios.',
      tools: ['Claude Code', 'Playwright', 'Playwright MCP', 'Antigravity'],
      outcomes: [
        'Automated conversational flow validation and prompt edge-case testing',
        'Caught critical conversational flow breakdowns prior to production',
        '92% test coverage across chatbot failure and regression scenarios',
        'Accelerated automated test creation and validation cycles with AI assistance',
      ],
    },
  },
  {
    title: 'Airport Management Web Platform QA',
    duration: 'June 2022 – April 2024',
    client: 'Mobit Solutions',
    description: 'Comprehensive manual, functional, and Playwright-driven testing on airport check-in, scheduling, and operational modules.',
    metrics: [
      { value: '100%', label: 'Core Modules', color: '#2563eb' },
      { value: 'Agile', label: 'Sprint Cycle', color: '#ef4444' },
      { value: '90%', label: 'Test Coverage', color: '#22c55e' },
      { value: '3', label: 'Tools Used', color: '#fff' },
    ],
    details: {
      challenge: 'Testing mission-critical airport operational flows including passenger check-in, flight scheduling, and administrative modules across multiple browsers.',
      approach: 'Executed functional, regression, and smoke testing across multiple build releases using Playwright and Postman. Maintained structured test cases and bug reports in an Agile team.',
      tools: ['Playwright', 'Postman', 'JIRA'],
      outcomes: [
        'Ensured seamless user flows across airport check-in and scheduling modules',
        'Maintained consistent product quality across multiple build releases',
        'Documented detailed test cases and bug reports contributing to Agile QA',
        'Prevented critical functional bugs from reaching production releases',
      ],
    },
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-card" style={{ marginBottom: 16 }}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer' }}
        onClick={() => setOpen(!open)}
      >
        <div style={{ flex: 1, paddingRight: 16 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{project.title}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} color="#666" />
              <span style={{ fontSize: 13, color: '#666' }}>{project.duration}</span>
            </div>
            <span style={{ color: '#444' }}>•</span>
            <span style={{ fontSize: 13, color: '#666' }}>{project.client}</span>
          </div>
          <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>{project.description}</p>
        </div>
        <div style={{ color: '#666', marginTop: 4 }}>
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 20 }} className="metrics-grid">
        {project.metrics.map((m) => (
          <div key={m.label} className="metric-card">
            <div style={{ fontSize: 28, fontWeight: 800, color: m.color, marginBottom: 4 }}>{m.value}</div>
            <div style={{ fontSize: 12, color: '#666' }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Expanded details */}
      {open && (
        <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid #2a2a2a' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="details-grid">
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: '#2563eb', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Challenge</h4>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>{project.details.challenge}</p>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: '#2563eb', marginBottom: 8, marginTop: 20, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Approach</h4>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>{project.details.approach}</p>
            </div>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: '#2563eb', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tools Used</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                {project.details.tools.map((t) => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: '#2563eb', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Outcomes</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.details.outcomes.map((o, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: '#22c55e', fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 13, color: '#a0a0a0' }}>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .metrics-grid { grid-template-columns: repeat(4, 1fr) !important; }
        .details-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 600px) {
          .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .details-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '96px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Projects & Case Studies</h2>
        <div className="section-accent" style={{ marginBottom: 16 }} />
        <p style={{ fontSize: 15, color: '#888', marginBottom: 48, maxWidth: 600 }}>
          Real-world testing scenarios demonstrating comprehensive QA strategies, problem-solving approaches, and measurable impact.
        </p>

        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
