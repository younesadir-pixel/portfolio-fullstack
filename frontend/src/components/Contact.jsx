import React, { useState } from 'react';
import { getApiUrl } from '../api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    try {
      const res = await fetch(getApiUrl('/api/contact/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok || res.status === 201) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || data.message || `Error ${res.status}`);
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message || 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="contact-grid">
          {/* Left info column */}
          <div>
            <div className="tag-label reveal">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l.54-.54a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.58 17z"/></svg>
              Contact
            </div>
            <h2 className="contact-info-title reveal">Let's work together.</h2>
            <p className="contact-info-desc reveal">
              I'm currently open to Full-Stack and Backend opportunities. If you have a project, a role or just want to connect — I'd love to hear from you.
            </p>

            <a href="mailto:younesadir@gmail.com" className="contact-detail reveal" style={{ color: 'inherit' }}>
              <div className="contact-detail-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">younesadir@gmail.com</div>
              </div>
            </a>

            <a href="https://github.com/younesadir-pixel" target="_blank" rel="noreferrer" className="contact-detail reveal" style={{ color: 'inherit' }}>
              <div className="contact-detail-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <div>
                <div className="contact-detail-label">GitHub</div>
                <div className="contact-detail-value">younesadir-pixel</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/sadir-younes" target="_blank" rel="noreferrer" className="contact-detail reveal" style={{ color: 'inherit' }}>
              <div className="contact-detail-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div>
                <div className="contact-detail-label">LinkedIn</div>
                <div className="contact-detail-value">sadir-younes</div>
              </div>
            </a>
          </div>

          {/* Right form */}
          <div className="contact-form-card reveal">
            {status.success && (
              <div className="form-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status.error && (
              <div className="form-error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" required placeholder="Younes Sadir" value={formData.name} onChange={handleChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" required placeholder="hello@example.com" value={formData.email} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" required placeholder="Job Opportunity / Collaboration" value={formData.subject} onChange={handleChange} className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" required rows={5} placeholder="Hi Younes, I'd like to discuss..." value={formData.message} onChange={handleChange} className="form-input" />
              </div>

              <button type="submit" className="btn-submit" disabled={status.loading}>
                {status.loading ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
