import React from 'react';

const experiences = [
  {
    role: 'Full-Stack Developer — Personal Projects',
    company: 'Self-Directed / Freelance',
    period: '2023 – Present',
    desc: 'Independently designed and shipped production-ready web applications spanning React frontends and Django/Express backends. Implemented real features: REST APIs, database schemas, email automation, analytics tracking, and admin dashboards.',
    achievements: [
      'Built a Fitness Park concept website with React 19, Node.js/Express 5 and MongoDB — featuring membership pre-registration and a boutique e-commerce module.',
      'Developed a full-stack portfolio platform with Django REST Framework, automated Gmail SMTP notifications and privacy-friendly session analytics.',
      'Created a multi-route temperature utility app using React 19 with real-time state synchronization across three temperature scales.',
    ],
    tech: ['React', 'Python', 'Django', 'Node.js', 'MongoDB', 'SQLite', 'REST APIs'],
  },
  {
    role: 'Web Development Intern / Student Project Lead',
    company: 'Academic Projects — Computer Science Program',
    period: '2022 – 2023',
    desc: 'Contributed to full-stack web projects within a structured computer science curriculum. Collaborated on system design, database modeling and API architecture while building responsive frontends.',
    achievements: [
      'Designed and implemented relational database schemas for club management and subscription tracking using MongoDB with Mongoose ODM.',
      'Built responsive multi-page React applications with dynamic routing using React Router DOM v7.',
      'Gained hands-on experience with backend environments: Node.js servers, Django admin panels and RESTful API design patterns.',
    ],
    tech: ['React', 'Django', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="tag-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            Experience
          </div>
          <h2 className="section-title">Development Experience</h2>
          <p className="section-subtitle">
            Real-world development experience building full-stack applications from backend architecture to frontend delivery.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-role">{exp.role}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-desc">{exp.desc}</p>

                <div className="timeline-achievements">
                  {exp.achievements.map((a, j) => (
                    <div key={j} className="achievement-item">{a}</div>
                  ))}
                </div>

                <div className="timeline-tech">
                  {exp.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
