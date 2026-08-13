import React from 'react';

const skillAreas = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Frontend Development',
    skills: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Responsive Design'],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: 'Backend Engineering',
    skills: ['Python', 'Django 5', 'Django REST Framework', 'Laravel', 'PHP', 'Node.js', 'Express'],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: 'Database & APIs',
    skills: ['SQLite', 'PostgreSQL', 'MySQL', 'MongoDB / Mongoose', 'REST API Design', 'Django ORM'],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>
      </svg>
    ),
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'PowerShell', 'npm', 'pip', 'dotenv', 'Postman'],
  },
];

export default function About() {
  const stats = [
    { num: '3+', label: 'Years Learning & Building' },
    { num: '5+', label: 'Real Projects Shipped' },
    { num: '2', label: 'Main Tech Stacks (Django + React)' },
    { num: '∞', label: 'Passion for Clean Code' },
  ];

  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left col */}
          <div>
            <div className="tag-label reveal">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              About
            </div>
            <h2 className="about-headline reveal">
              Building products,<br />not just websites.
            </h2>
            <p className="about-text reveal">
              I'm a Full-Stack Developer focused on crafting end-to-end web applications that are fast, reliable and maintainable. My approach combines clean backend architecture with intuitive frontend experiences.
            </p>
            <p className="about-text reveal">
              On the backend, I architect RESTful APIs, design relational database schemas and implement server logic using Python/Django and Laravel/PHP. On the frontend, I build reactive interfaces with React that connect seamlessly to those APIs.
            </p>
            <p className="about-text reveal">
              I care deeply about code quality, system design and delivering software that solves real problems — not just passes a spec sheet.
            </p>

            <div className="about-stats reveal">
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right col — skill areas */}
          <div>
            {skillAreas.map((area, i) => (
              <div key={i} className="about-skill-area reveal">
                <div className="skill-area-title">
                  <div className="skill-area-icon">{area.icon}</div>
                  {area.title}
                </div>
                <div className="skill-area-tags">
                  {area.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
