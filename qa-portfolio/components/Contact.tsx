'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '96px 0', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Get in Touch</h2>
        <div className="section-accent" style={{ marginBottom: 16 }} />
        <p style={{ fontSize: 15, color: '#888', marginBottom: 56, maxWidth: 500 }}>
          Looking for a dedicated QA engineer to ensure your software quality? Let&apos;s discuss how I can help.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64 }} className="contact-grid">
          {/* Left */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 24 }}>Contact Information</h3>

            {[
              { icon: <Mail size={18} color="#2563eb" />, text: 'alex.morgan@example.com', href: 'mailto:alex.morgan@example.com' },
              { icon: <Phone size={18} color="#2563eb" />, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
              { icon: <MapPin size={18} color="#2563eb" />, text: 'San Francisco, CA', href: null },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: 14, color: '#a0a0a0', textDecoration: 'none' }} onMouseOver={(e) => (e.currentTarget.style.color = '#fff')} onMouseOut={(e) => (e.currentTarget.style.color = '#a0a0a0')}>
                    {item.text}
                  </a>
                ) : (
                  <span style={{ fontSize: 14, color: '#a0a0a0' }}>{item.text}</span>
                )}
              </div>
            ))}

            <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: 24, marginTop: 8 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 16 }}>Connect with me</h3>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {sent ? (
              <div style={{
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: 12,
                padding: 32,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ fontSize: 14, color: '#888' }}>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 20, background: 'none', border: '1px solid #2a2a2a', color: '#888', padding: '8px 16px', borderRadius: 6, cursor: 'pointer', fontSize: 13 }}>
                  Send another message
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={{ fontSize: 13, color: '#a0a0a0', display: 'block', marginBottom: 8 }}>Name</label>
                  <input
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: '#a0a0a0', display: 'block', marginBottom: 8 }}>Email</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: '#a0a0a0', display: 'block', marginBottom: 8 }}>Subject</label>
                  <input
                    className="form-input"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: '#a0a0a0', display: 'block', marginBottom: 8 }}>Message</label>
                  <textarea
                    className="form-input"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ resize: 'vertical', minHeight: 120 }}
                  />
                </div>
                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <Send size={16} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1.5fr !important; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
