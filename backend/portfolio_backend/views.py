from django.http import HttpResponse

HTML_PORTFOLIO = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Younes | Full-Stack Software Engineer Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #090d16;
      --bg-card: rgba(18, 26, 43, 0.75);
      --bg-card-hover: rgba(28, 40, 65, 0.9);
      --border-color: rgba(255, 255, 255, 0.08);
      --accent-cyan: #38bdf8;
      --accent-violet: #818cf8;
      --accent-emerald: #34d399;
      --gradient-glow: linear-gradient(135deg, #38bdf8, #818cf8, #c084fc);
      --text-main: #f1f5f9;
      --text-muted: #94a3b8;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--bg-primary);
      color: var(--text-main);
      line-height: 1.6;
      overflow-x: hidden;
    }

    h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; }

    .glass-card {
      background: var(--bg-card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .glass-card:hover {
      background: var(--bg-card-hover);
      border-color: rgba(56, 189, 248, 0.3);
      transform: translateY(-4px);
      box-shadow: 0 20px 40px -15px rgba(56, 189, 248, 0.15);
    }

    .gradient-text {
      background: var(--gradient-glow);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .btn-primary {
      background: linear-gradient(135deg, #0284c7, #6366f1);
      color: #fff;
      padding: 12px 28px;
      border-radius: 9999px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
      text-decoration: none;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(99, 102, 241, 0.6);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.05);
      color: #f1f5f9;
      padding: 12px 28px;
      border-radius: 9999px;
      font-weight: 600;
      border: 1px solid rgba(255, 255, 255, 0.15);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }

    .nav-container {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      backdrop-filter: blur(20px);
      background: rgba(9, 13, 22, 0.85);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding: 18px 0;
    }

    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    .nav-link {
      color: var(--text-muted);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-link:hover { color: var(--accent-cyan); }

    .section {
      padding: 100px 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 12px;
      text-align: center;
    }

    .section-subtitle {
      color: var(--text-muted);
      text-align: center;
      max-width: 600px;
      margin: 0 auto 50px auto;
      font-size: 1.1rem;
    }

    .form-input {
      width: 100%;
      padding: 14px 18px;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: #fff;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.3s;
    }

    .form-input:focus {
      border-color: var(--accent-cyan);
      box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav class="nav-container">
    <div class="nav-content">
      <a href="#home" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:#fff;">
        <div style="background: linear-gradient(135deg, #0284c7, #6366f1); padding: 8px 12px; border-radius: 10px; font-weight: 800;">&lt;/&gt;</div>
        <span style="font-weight: 700; font-size: 1.25rem;">Younes<span style="color: #38bdf8;">.dev</span></span>
      </a>
      <ul class="nav-links">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="section" style="min-height: 85vh; display: flex; align-items: center; padding-top: 140px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; width: 100%;">
      <div>
        <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 9999px; color: #38bdf8; font-size: 0.875rem; font-weight: 600; margin-bottom: 24px;">
          ✨ Available for New Projects & Hiring
        </div>
        <h1 style="font-size: 3.5rem; line-height: 1.15; font-weight: 800; margin-bottom: 20px;">
          Hi, I'm <span class="gradient-text">Younes</span><br>
          Full-Stack Software Engineer
        </h1>
        <p style="color: #94a3b8; font-size: 1.2rem; margin-bottom: 36px; max-width: 520px;">
          Designing and engineering modern web applications with high performance, elegant UI, and robust backend APIs using Python, Django & React.
        </p>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <a href="#contact" class="btn-primary">Get in Touch →</a>
          <a href="#projects" class="btn-secondary">View Work</a>
        </div>
      </div>

      <div style="display: flex; justify-content: center;">
        <div class="glass-card" style="padding: 32px; width: 100%; max-width: 460px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 12px;">
            <div style="display: flex; gap: 8px;">
              <span style="width: 12px; height: 12px; border-radius: 50%; background: #ef4444;"></span>
              <span style="width: 12px; height: 12px; border-radius: 50%; background: #eab308;"></span>
              <span style="width: 12px; height: 12px; border-radius: 50%; background: #22c55e;"></span>
            </div>
            <span style="font-size: 0.8rem; color: #64748b;">developer.py</span>
          </div>
          <pre style="color: #38bdf8; font-size: 0.95rem; font-family: monospace; line-height: 1.7;"><code><span style="color: #c084fc;">class</span> Developer:
  name = <span style="color: #34d399;">"Younes"</span>
  stack = [<span style="color: #34d399;">"React"</span>, <span style="color: #34d399;">"Django"</span>, <span style="color: #34d399;">"Python"</span>]
  status = <span style="color: #34d399;">"Ready to build 🚀"</span>

  <span style="color: #818cf8;">def</span> get_status(self):
    <span style="color: #c084fc;">return</span> <span style="color: #34d399;">"Server running at 127.0.0.1:8000"</span></code></pre>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section">
    <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
    <p class="section-subtitle">Dedicated full-stack engineer creating scalable software solutions.</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
      <div class="glass-card" style="padding: 30px;">
        <div style="font-size: 2rem; margin-bottom: 12px;">🎨</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 10px;">Frontend Excellence</h3>
        <p style="color: #94a3b8; font-size: 0.95rem;">Building interactive, responsive interfaces using React, JavaScript, HTML5, and modern CSS glassmorphism styling.</p>
      </div>
      <div class="glass-card" style="padding: 30px;">
        <div style="font-size: 2rem; margin-bottom: 12px;">⚙️</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 10px;">Backend Engineering</h3>
        <p style="color: #94a3b8; font-size: 0.95rem;">Architecting Django REST Framework APIs, data models, object serializers, and SQLite database storage.</p>
      </div>
      <div class="glass-card" style="padding: 30px;">
        <div style="font-size: 2rem; margin-bottom: 12px;">🚀</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 10px;">System Integration</h3>
        <p style="color: #94a3b8; font-size: 0.95rem;">Ensuring robust API connections, asynchronous request processing, and fault-tolerant email error handling.</p>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section">
    <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
    <p class="section-subtitle">A showcase of custom software built with Python, Django & modern JavaScript.</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px;">
      <div class="glass-card" style="padding: 32px;">
        <span style="font-size: 0.8rem; color: #38bdf8; font-weight: 600; text-transform: uppercase;">Full Stack Project</span>
        <h3 style="font-size: 1.4rem; margin: 12px 0;">Portfolio & Contact Engine</h3>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 20px;">Personal portfolio with live contact backend, persisting user messages into SQLite database tables via REST APIs.</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem;">Django 5.2</span>
          <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem;">Python 3.13</span>
          <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem;">REST API</span>
        </div>
      </div>
      <div class="glass-card" style="padding: 32px;">
        <span style="font-size: 0.8rem; color: #818cf8; font-weight: 600; text-transform: uppercase;">Web Service</span>
        <h3 style="font-size: 1.4rem; margin: 12px 0;">Task & Workflow Platform</h3>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 20px;">Collaborative task management engine supporting structured data workflows and real-time state sync.</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem;">React</span>
          <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem;">REST API</span>
          <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 0.8rem;">SQLite</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="section">
    <h2 class="section-title">Technical <span class="gradient-text">Skills</span></h2>
    <p class="section-subtitle">Languages, frameworks, and dev tools in my workflow.</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
      <div class="glass-card" style="padding: 28px;">
        <h3 style="font-size: 1.2rem; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px;">Languages</h3>
        <p style="color: #cbd5e1;">Python, JavaScript (ES6+), HTML5, CSS3, SQL</p>
      </div>
      <div class="glass-card" style="padding: 28px;">
        <h3 style="font-size: 1.2rem; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px;">Frameworks</h3>
        <p style="color: #cbd5e1;">Django 5, Django REST Framework, React.js, Vite</p>
      </div>
      <div class="glass-card" style="padding: 28px;">
        <h3 style="font-size: 1.2rem; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px;">Dev Tools</h3>
        <p style="color: #cbd5e1;">Git, PowerShell, Virtual environment, SQLite3, npm</p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <h2 class="section-title">Contact <span class="gradient-text">Me</span></h2>
    <p class="section-subtitle">Send a message below. It will be sent to the Django backend at /api/contact/ and saved in the SQLite database.</p>

    <div style="max-width: 650px; margin: 0 auto;">
      <div class="glass-card" style="padding: 36px;">
        <div id="contact-alert" style="display: none; padding: 14px; border-radius: 10px; margin-bottom: 20px; font-weight: 500;"></div>

        <form id="contact-form" onsubmit="submitForm(event)" style="display: flex; flex-direction: column; gap: 18px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <label style="display: block; font-size: 0.875rem; color: #cbd5e1; margin-bottom: 6px;">Your Name</label>
              <input type="text" id="name" required placeholder="Younes" class="form-input">
            </div>
            <div>
              <label style="display: block; font-size: 0.875rem; color: #cbd5e1; margin-bottom: 6px;">Your Email</label>
              <input type="email" id="email" required placeholder="test@example.com" class="form-input">
            </div>
          </div>
          <div>
            <label style="display: block; font-size: 0.875rem; color: #cbd5e1; margin-bottom: 6px;">Subject</label>
            <input type="text" id="subject" required placeholder="Portfolio Test" class="form-input">
          </div>
          <div>
            <label style="display: block; font-size: 0.875rem; color: #cbd5e1; margin-bottom: 6px;">Message</label>
            <textarea id="message" required rows="4" placeholder="Hello, testing the contact endpoint..." class="form-input" style="resize: vertical;"></textarea>
          </div>
          <button type="submit" id="submit-btn" class="btn-primary" style="justify-content: center; width: 100%;">
            Send Message to Django API
          </button>
        </form>
      </div>
    </div>
  </section>

  <footer style="border-top: 1px solid rgba(255,255,255,0.05); padding: 30px; text-align: center; color: #64748b; font-size: 0.9rem;">
    <p>© Younes Portfolio — Powered by Django & React</p>
  </footer>

  <script>
    async function submitForm(e) {
      e.preventDefault();
      const btn = document.getElementById('submit-btn');
      const alert = document.getElementById('contact-alert');

      btn.disabled = true;
      btn.innerText = 'Sending to /api/contact/...';
      alert.style.display = 'none';

      const payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };

      try {
        const response = await fetch('/api/contact/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok || response.status === 201) {
          alert.style.display = 'block';
          alert.style.background = 'rgba(52, 211, 153, 0.15)';
          alert.style.border = '1px solid rgba(52, 211, 153, 0.3)';
          alert.style.color = '#34d399';
          alert.innerText = '✅ Success! Message saved in SQLite database via Django API.';
          document.getElementById('contact-form').reset();
        } else {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.detail || 'Failed with status ' + response.status);
        }
      } catch (err) {
        alert.style.display = 'block';
        alert.style.background = 'rgba(239, 68, 68, 0.15)';
        alert.style.border = '1px solid rgba(239, 68, 68, 0.3)';
        alert.style.color = '#f87171';
        alert.innerText = '❌ Error: ' + err.message;
      } finally {
        btn.disabled = false;
        btn.innerText = 'Send Message to Django API';
      }
    }
  </script>
</body>
</html>"""

def home(request):
    return HttpResponse(HTML_PORTFOLIO)
