import React from 'react';

const projects = [
  {
    id: 'fitness-park',
    featured: true,
    number: '01',
    category: 'Enterprise Landing Page',
    title: 'Fitness Park Concept',
    desc: 'A premium gym landing page concept focused on conversion, responsive design and high-impact visual storytelling. Built with a full frontend/backend stack including a Node.js/Express API and MongoDB for managing memberships and clubs.',
    image: '/projects/fitness_park_hero.png',
    gallery: [
      { src: '/projects/fitness_park_hero.png', title: '01. Hero & Brand' },
      { src: '/projects/fitness_park_musculation.png', title: '02. Activities' },
      { src: '/projects/fitness_park_shop.png', title: '03. Boutique Shop' },
    ],
    technologies: ['React 19', 'React Router DOM 7', 'Node.js', 'Express 5', 'MongoDB / Mongoose', 'CSS3'],
    features: [
      'Custom Hero Section with bold brand identity',
      'Membership Tier Selection & pre-registration workflow',
      'Multi-level Dropdown Navigation system',
      'Supplement e-commerce boutique with local pricing',
    ],
    github: 'https://github.com/younesadir-pixel',
    live: null,
  },
  {
    id: 'gymtracker-pro',
    featured: true,
    number: '02',
    category: 'SaaS / Fitness Intelligence',
    title: 'GYMTRACKER Pro Edition',
    desc: 'An advanced SaaS workout tracking & fitness intelligence platform featuring AI recovery index insights (Coach Nova), Apple Watch live sync, 5-day split program management, real-time set logging, and 1RM Brzycki strength calculators.',
    image: '/projects/gymtracker_dashboard.png',
    gallery: [
      { src: '/projects/gymtracker_dashboard.png', title: '01. Dashboard & Nova AI' },
      { src: '/projects/gymtracker_tracking.png', title: '02. Workout Session' },
      { src: '/projects/gymtracker_tools.png', title: '03. Pro Tools & 1RM' },
    ],
    technologies: ['React 19', 'JavaScript ES6+', 'Tailwind CSS', 'SaaS Addons', 'REST APIs', 'Vite'],
    features: [
      'Coach Nova AI Recovery Index (94% Peak Capacity) & Live progression advice',
      'Active Split Workout Logger with live volume, intensity & working set counters',
      'Apple Watch live sync integration & 12-day workout streak tracking',
      'Pro Tools module featuring Brzycki formula 1RM Theoretical Max Strength Calculator',
    ],
    github: 'https://github.com/younesadir-pixel',
    live: null,
  },
  {
    id: 'portfolio-api',
    featured: false,
    number: '03',
    category: 'Full-Stack Web App',
    title: 'Portfolio & Analytics Engine',
    desc: 'Production-ready developer portfolio with a Django 5 REST API backend, automated Gmail SMTP notifications, session-based visitor analytics, and a comprehensive Django Admin dashboard.',
    image: null,
    gallery: [],
    technologies: ['React 18', 'Django 5.2', 'Python 3.13', 'Django REST Framework', 'SQLite', 'Vite'],
    features: [
      'Contact form saved to SQLite & delivered to Gmail',
      'Privacy-friendly session visitor analytics (POST /api/track-visit/)',
      'Django Admin dashboard for visits & messages',
      'Cross-origin REST API with CORS headers & dotenv config',
    ],
    github: 'https://github.com/younesadir-pixel',
    live: 'http://localhost:5173',
  },
  {
    id: 'temperature',
    featured: false,
    number: '04',
    category: 'Frontend Utility App',
    title: 'Temperature Unit Converter',
    desc: 'A responsive React utility app for real-time multi-scale temperature conversion (Celsius, Fahrenheit, Kelvin) with dynamic weather state feedback and instant validation.',
    image: null,
    gallery: [],
    technologies: ['React 19', 'JavaScript ES6+', 'CSS3', 'HTML5'],
    features: [
      'Instant three-scale conversion with live state sync',
      'Dynamic weather threshold status feedback',
      'Mobile-first responsive layout using React hooks',
    ],
    github: 'https://github.com/younesadir-pixel',
    live: null,
  },
];

export default function Projects() {
  const featuredList = projects.filter(p => p.featured || (p.gallery && p.gallery.length > 0));
  const restList = projects.filter(p => !p.featured && (!p.gallery || p.gallery.length === 0));

  return (
    <section id="projects" className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section header */}
        <div className="section-header reveal">
          <div className="tag-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            Projects
          </div>
          <h2 className="section-title">Real Work I've Built</h2>
          <p className="section-subtitle">End-to-end applications built with production-grade technologies, shipped with real features and maintainable code.</p>
        </div>

        {/* Featured Showcase Projects */}
        {featuredList.map((proj) => (
          <div key={proj.id} className={`featured-project ${proj.id === 'gymtracker-pro' ? 'gymtracker-theme' : ''} reveal`} style={{ marginBottom: '48px' }}>
            <div className="featured-project-inner">
              {/* Header info */}
              <div className="featured-header">
                <div>
                  <div className="project-number">{proj.number} / 0{projects.length}</div>
                  <div className="project-cat">{proj.category}</div>
                  <h3 className="project-title">{proj.title}</h3>
                </div>
                <div className="project-links">
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '0.88rem', padding: '10px 20px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  )}
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.88rem', padding: '10px 20px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{proj.desc}</p>

              {/* 3-Column Screenshots Grid */}
              <div className="project-gallery-grid">
                {proj.gallery.map((item, idx) => {
                  const imgSrc = typeof item === 'string' ? item : item.src;
                  const imgTitle = typeof item === 'string' ? `Preview ${idx + 1}` : item.title;
                  return (
                    <div key={idx} className="gallery-showcase-card">
                      <div className="browser-chrome">
                        <span className="chrome-dot chrome-dot-red" />
                        <span className="chrome-dot chrome-dot-yellow" />
                        <span className="chrome-dot chrome-dot-green" />
                        <span className="showcase-card-title">{imgTitle}</span>
                      </div>
                      <div className="showcase-img-frame">
                        <img src={imgSrc} alt={imgTitle} className="showcase-img" loading="lazy" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Features and tech stack */}
              <div className="featured-bottom-info">
                <div className="project-features">
                  {proj.features.map((f, i) => (
                    <div key={i} className="project-feature-item">
                      <span className="feature-dot" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="tech-stack-row" style={{ marginBottom: 0 }}>
                  {proj.technologies.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
              </div>

            </div>
          </div>
        ))}

        {/* Other projects grid */}
        <div className="projects-grid">
          {restList.map((proj) => (
            <div key={proj.id} className="proj-card reveal">
              <div className="proj-card-img">
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} loading="lazy" />
                ) : (
                  <div className="proj-card-img-placeholder">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}>Web Application</span>
                  </div>
                )}
              </div>

              <div className="proj-card-body">
                <span className="proj-card-cat">{proj.category}</span>
                <h3 className="proj-card-title">{proj.title}</h3>
                <p className="proj-card-desc">{proj.desc}</p>

                <div className="proj-card-tech">
                  {proj.technologies.slice(0, 4).map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>

                <div className="proj-card-actions">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="btn-sm-outline">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      Code
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="btn-sm-primary">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
