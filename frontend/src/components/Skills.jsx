import React from 'react';

const stackGroups = [
  {
    label: 'Frontend',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    items: ['React 18/19', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    label: 'Backend',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    items: ['Python 3.13', 'Django 5', 'Django REST Framework', 'Laravel', 'PHP', 'Node.js / Express'],
  },
  {
    label: 'Database',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    items: ['SQLite', 'PostgreSQL', 'MySQL', 'MongoDB', 'Django ORM', 'Mongoose'],
  },
  {
    label: 'Tools',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    items: ['Git', 'GitHub', 'npm / pip', 'PowerShell', 'Postman', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="section-pad stack-section">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'left' }}>
          <div className="tag-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Tech Stack
          </div>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            A curated set of tools and frameworks that power my full-stack projects from backend APIs to polished frontends.
          </p>
        </div>

        <div className="stack-grid">
          {stackGroups.map((group) => (
            <div key={group.label} className="stack-column reveal">
              <div className="stack-col-header">
                <div className="stack-col-icon">{group.icon}</div>
                <span className="stack-col-title">{group.label}</span>
              </div>
              <div className="stack-items">
                {group.items.map(item => (
                  <div key={item} className="stack-item">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
