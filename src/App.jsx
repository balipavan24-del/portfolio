import { useState, useEffect } from 'react'
import './App.css'
import avatarImg from './assets/avatar.jpg'
import insureeaseImg from './assets/insureease.jpg'
import savoriaImg from './assets/savoria.jpg'
import poppourImg from './assets/poppour.jpg'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'labs', 'arsenal', 'contact']
      const scrollPosition = window.scrollY + 250

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pavanbali.dev@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <div className="portfolio-layout">
      {/* --------------------------------------------------------------------
          LEFT RED ACCENT RAIL
          -------------------------------------------------------------------- */}
      <aside className="red-rail" aria-label="Main Navigation">
        <div className="rail-top">
          <a href="#home" className="pb-badge" title="Pavan Bali Home">
            PB
          </a>
        </div>

        <nav className="rail-nav">
          <a
            href="#home"
            className={`rail-nav-item ${activeSection === 'home' ? 'active' : ''}`}
            title="Terminal / Home"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </a>

          <a
            href="#about"
            className={`rail-nav-item ${activeSection === 'about' ? 'active' : ''}`}
            title="Know My Path"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>

          <a
            href="#labs"
            className={`rail-nav-item ${activeSection === 'labs' ? 'active' : ''}`}
            title="Featured Labs"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 2v7.31L4.69 18.5a2 2 0 0 0 1.73 3h15.16a2 2 0 0 0 1.73-3L14 9.31V2"></path>
              <line x1="8.5" y1="2" x2="15.5" y2="2"></line>
            </svg>
          </a>

          <a
            href="#arsenal"
            className={`rail-nav-item ${activeSection === 'arsenal' ? 'active' : ''}`}
            title="Arsenal & Systems"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="14" x2="23" y2="14"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
          </a>

          <a
            href="#contact"
            className={`rail-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            title="Initiate Connection"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </nav>

        <div className="rail-bottom">
          <div className="rail-status">
            <span className="status-dot-pulse"></span>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>
      </aside>

      {/* --------------------------------------------------------------------
          MAIN VIEWPORT
          -------------------------------------------------------------------- */}
      <main className="main-viewport">
        {/* Ambient Glows */}
        <div className="ambient-glow ambient-glow-red"></div>
        <div className="ambient-glow ambient-glow-cyan"></div>
        <div className="ambient-glow ambient-glow-red-bottom"></div>

        <div className="content-container">
          {/* ================================================================
              1. HERO SECTION
              ================================================================ */}
          <section id="home" className="section hero-section">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-badge-wrap">
                  <div className="hero-tech-badge">
                    <span className="corner-plus">+</span>
                    <span>HELLO WORLD, I AM PAVAN</span>
                    <span className="corner-plus">+</span>
                  </div>
                </div>

                <h1 className="hero-name">PAVAN BALI</h1>

                <div className="hero-roles">
                  <span className="role-gradient">Frontend Developer</span>
                  <span className="role-script">&amp; UI/UX Enthusiast</span>
                </div>

                <p className="hero-desc">
                  Able to build clean, high-performance, and scalable frontend architectures. Focused on modern web interfaces, systems development, performance, and memorable user experiences that scale seamlessly.
                </p>

                <div className="hero-actions">
                  <a href="#labs" className="btn-crimson">
                    <span>EXPLORE MY ARCHIVES</span>
                    <span className="arrow">›</span>
                  </a>

                  <a href="#contact" className="btn-subtle-link">
                    <span>› Talk With Me / Resume</span>
                  </a>
                </div>
              </div>

              {/* Right Radar / Target Graphic */}
              <div className="hero-radar-container" aria-hidden="true">
                <div className="radar-target">
                  <div className="radar-circle-outer"></div>
                  <div className="radar-circle-inner"></div>
                  <div className="radar-sweep"></div>
                  <div className="radar-crosshair">✕</div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              2. KNOW MY PATH (ABOUT SECTION)
              ================================================================ */}
          <section id="about" className="section path-section">
            <div className="section-header">
              <h2 className="section-title">KNOW MY PATH</h2>
              <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-dot"></span>
              </div>
            </div>

            <div className="path-grid">
              {/* Left Portrait */}
              <div className="avatar-container">
                <div className="avatar-frame">
                  <span className="avatar-corner-bracket tl"></span>
                  <span className="avatar-corner-bracket tr"></span>
                  <span className="avatar-corner-bracket bl"></span>
                  <span className="avatar-corner-bracket br"></span>
                  <div className="avatar-inner">
                    <img src={avatarImg} alt="Pavan Bali - Frontend Developer" />
                  </div>
                </div>
              </div>

              {/* Right Bio & Stats */}
              <div className="path-text-block">
                <h3 className="path-lead-text">
                  I'm an MCA student &amp; frontend engineer with a passion for crafting pixel-perfect, intuitive digital experiences.
                </h3>
                <p className="path-body-text">
                  With a solid grounding in modern JavaScript frameworks, responsive web architecture, and design systems, I bridge the gap between design vision and technical execution. I specialize in turning complex problems into clean, modular, and performant interfaces that deliver measurable value.
                </p>

                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-indicator"></div>
                    <div className="stat-value">2+ Yrs</div>
                    <div className="stat-label">Tech Experience</div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-indicator"></div>
                    <div className="stat-value">15+ Proj</div>
                    <div className="stat-label">Successfully Shipped</div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-indicator"></div>
                    <div className="stat-value">6 Month</div>
                    <div className="stat-label">Industry Internship</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              3. FEATURED LABS (PROJECTS SECTION)
              ================================================================ */}
          <section id="labs" className="section labs-section">
            <div className="section-header">
              <h2 className="section-title">FEATURED LABS</h2>
              <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-dot"></span>
              </div>
            </div>

            <div className="projects-container">
              {/* Project 01 */}
              <article className="project-item">
                <div className="project-details">
                  <div className="project-tag">[ 01 ]</div>
                  <h3 className="project-title">InsureEase</h3>
                  <p className="project-summary">
                    A comprehensive fintech insurance analytics dashboard with real-time risk assessment, interactive policy distribution graphs, claims processing pipelines, and customizable role-based views.
                  </p>
                  <div className="project-stack">
                    <span className="stack-badge">React</span>
                    <span className="stack-badge">TypeScript</span>
                    <span className="stack-badge">TailwindCSS</span>
                    <span className="stack-badge">Vite</span>
                    <span className="stack-badge">Chart.js</span>
                  </div>
                  <a href="#contact" className="project-action-link">
                    <span>VIEW PROJECT</span>
                    <span className="arrow">›</span>
                  </a>
                </div>

                <div className="mockup-window">
                  <div className="mockup-bar">
                    <span className="mockup-traffic-dot red"></span>
                    <span className="mockup-traffic-dot yellow"></span>
                    <span className="mockup-traffic-dot green"></span>
                    <span className="mockup-address">https://insureease.analytics.app</span>
                  </div>
                  <div className="mockup-content">
                    <img src={insureeaseImg} alt="InsureEase Dashboard Interface" />
                  </div>
                </div>
              </article>

              {/* Project 02 */}
              <article className="project-item">
                <div className="project-details">
                  <div className="project-tag">[ 02 ]</div>
                  <h3 className="project-title">Savoria Restaurant</h3>
                  <p className="project-summary">
                    An ultra-refined gastronomic luxury restaurant website featuring interactive tasting course menus, real-time table reservation system, and immersive visual culinary storytelling.
                  </p>
                  <div className="project-stack">
                    <span className="stack-badge">React</span>
                    <span className="stack-badge">JavaScript</span>
                    <span className="stack-badge">TailwindCSS</span>
                    <span className="stack-badge">CSS3</span>
                  </div>
                  <a href="#contact" className="project-action-link">
                    <span>VIEW PROJECT</span>
                    <span className="arrow">›</span>
                  </a>
                </div>

                <div className="mockup-window">
                  <div className="mockup-bar">
                    <span className="mockup-traffic-dot red"></span>
                    <span className="mockup-traffic-dot yellow"></span>
                    <span className="mockup-traffic-dot green"></span>
                    <span className="mockup-address">https://savoria-gourmet.dining</span>
                  </div>
                  <div className="mockup-content">
                    <img src={savoriaImg} alt="Savoria Restaurant Interface" />
                  </div>
                </div>
              </article>

              {/* Project 03 */}
              <article className="project-item">
                <div className="project-details">
                  <div className="project-tag">[ 03 ]</div>
                  <h3 className="project-title">Pop &amp; Pour Café</h3>
                  <p className="project-summary">
                    A vibrant neon-styled café &amp; boba beverage ordering interface with interactive custom drink customizers (sweetness, ice, toppings), live cart calculations, and animated dessert selectors.
                  </p>
                  <div className="project-stack">
                    <span className="stack-badge">React</span>
                    <span className="stack-badge">JavaScript</span>
                    <span className="stack-badge">TailwindCSS</span>
                    <span className="stack-badge">Vite</span>
                  </div>
                  <a href="#contact" className="project-action-link">
                    <span>EXPLORE CASE</span>
                    <span className="arrow">›</span>
                  </a>
                </div>

                <div className="mockup-window">
                  <div className="mockup-bar">
                    <span className="mockup-traffic-dot red"></span>
                    <span className="mockup-traffic-dot yellow"></span>
                    <span className="mockup-traffic-dot green"></span>
                    <span className="mockup-address">https://popandpour.cafe</span>
                  </div>
                  <div className="mockup-content">
                    <img src={poppourImg} alt="Pop & Pour Cafe Interface" />
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* ================================================================
              4. ARSENAL & SYSTEMS (SKILLS SECTION)
              ================================================================ */}
          <section id="arsenal" className="section arsenal-section">
            <div className="section-header">
              <h2 className="section-title">ARSENAL &amp; SYSTEMS</h2>
              <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-dot"></span>
              </div>
            </div>

            <div className="arsenal-grid">
              {/* Card 1 */}
              <div className="arsenal-card">
                <div className="arsenal-header">
                  <span className="arsenal-dot"></span>
                  <h3>FRONTEND STACK</h3>
                </div>
                <div className="skills-wrap">
                  <span className="skill-pill">React</span>
                  <span className="skill-pill">Next.js</span>
                  <span className="skill-pill">TypeScript</span>
                  <span className="skill-pill">JavaScript</span>
                  <span className="skill-pill">HTML5</span>
                  <span className="skill-pill">CSS3</span>
                  <span className="skill-pill">Tailwind CSS</span>
                  <span className="skill-pill">Redux</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="arsenal-card">
                <div className="arsenal-header">
                  <span className="arsenal-dot"></span>
                  <h3>UTILITIES &amp; CLOUD</h3>
                </div>
                <div className="skills-wrap">
                  <span className="skill-pill">Git</span>
                  <span className="skill-pill">GitHub</span>
                  <span className="skill-pill">VS Code</span>
                  <span className="skill-pill">Postman</span>
                  <span className="skill-pill">Figma</span>
                  <span className="skill-pill">Vite</span>
                  <span className="skill-pill">Vercel</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="arsenal-card">
                <div className="arsenal-header">
                  <span className="arsenal-dot"></span>
                  <h3>PHILOSOPHIES</h3>
                </div>
                <div className="skills-wrap">
                  <span className="skill-pill">UI/UX Design</span>
                  <span className="skill-pill">Responsive Design</span>
                  <span className="skill-pill">Performance Optimization</span>
                  <span className="skill-pill">RESTful APIs</span>
                  <span className="skill-pill">Clean Architecture</span>
                  <span className="skill-pill">Accessibility (a11y)</span>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              5. INITIATE CONNECTION (CONTACT SECTION)
              ================================================================ */}
          <section id="contact" className="section contact-section">
            <div className="section-header">
              <div className="contact-header-flex">
                <h2 className="section-title">INITIATE CONNECTION</h2>
                <span className="contact-sparkle">✦</span>
              </div>
              <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-dot"></span>
              </div>
            </div>

            <div className="contact-grid">
              {/* Form */}
              <div className="contact-form-box">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Transmission Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Share project details, inquiry, or just say hello..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`btn-transmit ${formSubmitted ? 'transmitted' : ''}`}
                  >
                    <span>{formSubmitted ? 'TRANSMITTED SUCCESSFULLY ✓' : 'TRANSMIT MESSAGE'}</span>
                    <span className="arrow">›</span>
                  </button>
                </form>
              </div>

              {/* Info Column */}
              <div className="contact-info-panel">
                <h3 className="contact-info-title">Let's Build Something Dynamic</h3>
                <p className="contact-info-desc">
                  Have a challenging project, full-time engineering opportunity, or creative collaboration in mind? My transmission channels are always open.
                </p>

                <div className="contact-details-list">
                  <div
                    className="contact-card-item"
                    onClick={handleCopyEmail}
                    style={{ cursor: 'pointer' }}
                    title="Click to copy email address"
                  >
                    <div className="contact-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-meta-label">DIRECT EMAIL (CLICK TO COPY)</div>
                      <div className="contact-meta-value">
                        {copiedEmail ? 'Copied to clipboard! ✓' : 'pavanbali.dev@gmail.com'}
                      </div>
                    </div>
                  </div>

                  <div className="contact-card-item">
                    <div className="contact-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-meta-label">BASE LOCATION</div>
                      <div className="contact-meta-value">India • Available Worldwide Remote</div>
                    </div>
                  </div>

                  <div className="status-badge-item">
                    <span className="status-live-dot"></span>
                    <span>Actively Open to Full-Time &amp; Freelance Roles</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              FOOTER
              ================================================================ */}
          <footer className="portfolio-footer">
            <div className="footer-top">
              <div className="footer-brand">
                <span className="footer-pb-badge">PB</span>
                <span className="footer-brand-name">PAVAN BALI</span>
              </div>

              <div className="footer-social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-icon"
                  title="GitHub Profile"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-icon"
                  title="LinkedIn Profile"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-icon"
                  title="X (Twitter) Profile"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>

                <a
                  href="mailto:pavanbali.dev@gmail.com"
                  className="footer-social-icon"
                  title="Direct Transmission"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2026 Pavan Bali. All systems operational. Built with React &amp; Vite.</p>
              <p className="footer-accent-msg">Designed for the modern web</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
