import React from 'react';

export default function Hero() {
  const techs = ['Python', 'Django', 'React', 'Laravel', 'REST APIs', 'SQLite', 'PostgreSQL', 'Vite'];

  return (
    <section id="home" className="hero">
      <div className="hero-glow" />
      <div className="hero-glow-left" />

      <div className="container">
        <div className="hero-grid">

          {/* ── LEFT: existing content, unchanged ── */}
          <div className="hero-content">
            {/* Availability badge */}
            <div className="availability-badge fade-in-up">
              <span className="availability-dot" />
              Open to Full-Stack &amp; Backend opportunities
            </div>

            {/* Name */}
            <h1 className="hero-heading fade-in-up fade-in-up-delay-1">
              Younes Sadir
            </h1>

            {/* Title */}
            <p className="hero-sub fade-in-up fade-in-up-delay-2">
              Full-Stack <span className="gradient-text">Developer</span>
            </p>

            {/* Description */}
            <p className="hero-desc fade-in-up fade-in-up-delay-3">
              I design and build scalable web applications end-to-end — from robust Python/Django REST APIs and Laravel backends to responsive React frontends. I solve real problems and ship production-ready software.
            </p>

            {/* Tech chips */}
            <div className="hero-tech-line fade-in-up fade-in-up-delay-3">
              {techs.map(t => (
                <span key={t} className="hero-tech-chip">{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-cta fade-in-up fade-in-up-delay-4">
              <a href="#contact" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Get In Touch
              </a>
              <a href="#projects" className="btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                </svg>
                View Featured Project
              </a>
            </div>
          </div>

          {/* ── RIGHT: developer / code visual card ── */}
          <div className="hero-visual fade-in-up fade-in-up-delay-2">
            <div className="hero-code-card">
              {/* Top bar */}
              <div className="hero-code-bar">
                <span className="chrome-dot chrome-dot-red" />
                <span className="chrome-dot chrome-dot-yellow" />
                <span className="chrome-dot chrome-dot-green" />
                <span className="hero-code-filename">portfolio_api.py</span>
              </div>
              {/* Code body */}
              <pre className="hero-code-body"><code>{`from django.db import models
from rest_framework import serializers

class ContactMessage(models.Model):
    name    = models.CharField(max_length=100)
    email   = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add=True
    )

class ContactSerializer(
    serializers.ModelSerializer
):
    class Meta:
        model  = ContactMessage
        fields = '__all__'`}</code></pre>
              {/* Status row */}
              <div className="hero-code-status">
                <span className="hero-status-dot" />
                <span>Django REST API · Running on :8000</span>
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="hero-stat-badge hero-stat-badge-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <span>API · Live</span>
            </div>
            <div className="hero-stat-badge hero-stat-badge-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Full-Stack</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
