'use client';
import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform Testing',
    duration: '8 months',
    client: 'Major Retail Company',
    description: 'Led end-to-end testing for a large-scale e-commerce platform handling 100K+ daily transactions.',
    metrics: [
      { value: '156', label: 'Bugs Found', color: '#2563eb' },
      { value: '12', label: 'Critical', color: '#ef4444' },
      { value: '85%', label: 'Coverage', color: '#22c55e' },
      { value: '6', label: 'Tools Used', color: '#fff' },
    ],
    details: {
      challenge: 'The platform needed thorough testing across multiple browsers, devices, and user journeys including checkout flows, payment processing, and inventory management.',
      approach: 'Implemented a hybrid testing approach combining automated regression tests with exploratory testing. Built a Selenium-based automation framework with 500+ test cases covering critical user flows.',
      tools: ['Selenium WebDriver', 'TestNG', 'Jenkins', 'JIRA', 'Postman', 'JMeter'],
      outcomes: ['Reduced regression testing time by 60%', 'Achieved 85% automation coverage', 'Zero critical bugs in production post-release', 'Improved page load performance by 30%'],
    },
  },
  {
    title: 'Healthcare Management System QA',
    duration: '6 months',
    client: 'Healthcare Provider',
    description: 'Quality assurance for HIPAA-compliant patient management system with strict regulatory requirements.',
    metrics: [
      { value: '89', label: 'Bugs Found', color: '#2563eb' },
      { value: '8', label: 'Critical', color: '#ef4444' },
      { value: '92%', label: 'Coverage', color: '#22c55e' },
      { value: '5', label: 'Tools Used', color: '#fff' },
    ],
    details: {
      challenge: 'Ensuring HIPAA compliance while maintaining functionality across patient records, appointment scheduling, and billing systems.',
      approach: 'Developed risk-based testing strategy focused on data security and compliance. Conducted security testing, data validation, and accessibility testing.',
      tools: ['Playwright', 'RestAssured', 'OWASP ZAP', 'TestRail', 'Confluence'],
      outcomes: ['100% HIPAA compliance achieved', '92% test coverage maintained', 'All 8 critical security vulnerabilities resolved', 'Successful regulatory audit'],
    },
  },
  {
    title: 'Mobile Banking App Testing',
    duration: '10 months',
    client: 'FinTech Startup',
    description: 'Complete testing lifecycle for iOS and Android banking application with real-time transaction processing.',
    metrics: [
      { value: '134', label: 'Bugs Found', color: '#2563eb' },
      { value: '18', label: 'Critical', color: '#ef4444' },
      { value: '78%', label: 'Coverage', color: '#22c55e' },
      { value: '6', label: 'Tools Used', color: '#fff' },
    ],
    details: {
      challenge: 'Testing a fintech app across multiple device configurations, OS versions, and network conditions while ensuring transaction security.',
      approach: 'Implemented cross-platform mobile testing using Appium for automation, combined with manual exploratory testing on real devices and emulators.',
      tools: ['Appium', 'Postman', 'Charles Proxy', 'Firebase TestLab', 'JIRA', 'Jenkins'],
      outcomes: ['78% automation coverage across iOS and Android', '18 critical security issues resolved pre-launch', 'Performance optimized for 2G/3G networks', 'App store rating improved from 3.2 to 4.6'],
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
