import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Programming',
    items: ['Java', 'Python', 'JavaScript', 'C'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'SQL'],
  },
  {
    title: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'Docker', 'AWS'],
  },
  {
    title: 'Areas of Interest',
    items: ['Generative AI', 'AI agents', 'Machine learning', 'Scalable applications'],
  },
]

const projects = [
  {
    name: 'Todo List Application',
    description:
      'A task management application for creating, completing, tracking, and deleting tasks. Built as a full-stack product focused on usability, productivity, and reliable task tracking.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://todo-list-45.vercel.app/',
    githubUrl: 'https://github.com/Santosh4512/Todo-list',
  },
  {
    name: 'Fertilizer Billing System',
    description:
      'A web-based billing application designed to support fertilizer sales and billing workflows with an efficient, user-friendly interface for operational use.',
    tags: ['React', 'Vite', 'Express.js', 'MongoDB'],
    liveUrl: 'https://fertilizer-billing.onrender.com',
    githubUrl: 'https://github.com/Santosh4512/Fertilizer-billing',
  },
  {
    name: 'MailScrapping',
    description:
      'An email-focused application with authentication and Gmail integration workflows, designed to support practical and secure communication-related use cases.',
    tags: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Passport'],
    liveUrl: 'https://mailscrapping4512.vercel.app/',
    githubUrl: 'https://github.com/Santosh4512/MailScrapping',
  },
  {
    name: 'AI Image Captioning Application',
    description:
      'An AI-powered application that generates captions for uploaded images using a vision-capable model and an interactive interface for accessibility and experimentation.',
    tags: ['Python', 'Streamlit', 'Gemini API'],
    liveUrl: null,
    githubUrl: 'https://github.com/Santosh4512',
  },
]

const certifications = [
  'Salesforce AI Associate',
  'Salesforce AI Specialist',
  'AWS Certified AI Practitioner',
  'AWS Certified Solutions Architect - Associate',
  'AWS Certified Cloud Practitioner',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileImageError, setProfileImageError] = useState(false)

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a
            className="brand"
            href="#home"
            aria-label="NALLAMILLI SANTOSH BHASHKAR REDDY home"
            onClick={closeMenu}
          >
            <span className="brand-mark">SR</span>
            <span className="brand-text">NALLAMILLI SANTOSH BHASHKAR REDDY</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-menu">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero container reveal">
          <div className="hero-copy">
            <p className="eyebrow">Final-year CSE student • Full-stack developer • AI enthusiast</p>
            <h1>Hi, I&apos;m NALLAMILLI SANTOSH BHASHKAR REDDY.</h1>
            <p className="hero-role">Computer Science Undergraduate | Full-Stack Developer | AI Enthusiast</p>
            <p className="lead">
              I am a final-year Computer Science student at VIT-AP University, passionate
              about full-stack development, software engineering, AI-powered applications, and
              building practical solutions that make an impact.
            </p>

            <div className="cta-row">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
              <a
                className="button ghost"
                href="https://github.com/Santosh4512"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <ul className="quick-stats" aria-label="Key profile highlights">
              <li>
                <strong>Final year</strong>
                <span>CSE undergraduate</span>
              </li>
              <li>
                <strong>Focus</strong>
                <span>Full-stack & AI</span>
              </li>
              <li>
                <strong>Based at</strong>
                <span>VIT-AP University</span>
              </li>
            </ul>
          </div>

          <div className="hero-media">
            {!profileImageError ? (
              <div className="profile-frame">
                <img
                  src="https://github.com/Santosh4512.png?size=800"
                  alt="NALLAMILLI SANTOSH BHASHKAR REDDY - Profile Photo"
                  className="profile-image"
                  onError={() => setProfileImageError(true)}
                />
              </div>
            ) : (
              <div className="profile-placeholder" role="img" aria-label="Santosh Reddy - Profile Photo">
                <span>SR</span>
              </div>
            )}

            <aside className="hero-card" aria-label="Profile summary card">
              <div className="mini-badge">Currently pursuing B.Tech CSE</div>
              <h2>Building useful software with curiosity and purpose.</h2>
              <p>
                I enjoy learning new technologies, exploring inventive ideas, and collaborating
                with people to build tools that solve real-world problems.
              </p>
              <div className="hero-metadata">
                <div>
                  <span>University</span>
                  <strong>VIT-AP University</strong>
                </div>
                <div>
                  <span>Degree</span>
                  <strong>B.Tech in CSE</strong>
                </div>
                <div>
                  <span>Duration</span>
                  <strong>2023–2027</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Developer with a passion for solving real-world problems.</h2>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                I am a final-year Computer Science student at VIT-AP University, interested in
                full-stack development, software engineering, AI-powered applications, and
                solving real-world problems through technology. I enjoy learning new
                technologies, building useful applications, exploring new ideas, and
                collaborating with people.
              </p>
              <p>
                My work is driven by curiosity and the goal of creating practical digital tools
                that are both useful and enjoyable to use. I am especially interested in the
                intersection of modern web development and AI-driven experiences.
              </p>
            </div>

            <div className="about-panel">
              <h3>Interests</h3>
              <ul>
                <li>Cricket</li>
                <li>Reading books</li>
                <li>Watching TV</li>
                <li>Learning about different people and cultures</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Core strengths and areas of focus.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Academic background.</h2>
          </div>

          <div className="education-card">
            <div className="education-header">
              <div>
                <p className="education-school">VIT-AP University</p>
                <h3>B.Tech, Computer Science and Engineering</h3>
              </div>
              <span className="education-period">2023–2027</span>
            </div>
            <p className="education-status">Final-year undergraduate student</p>
          </div>
        </section>

        <section id="projects" className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">Featured Projects</p>
            <h2>Applications built with practical problem-solving in mind.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                </div>
                <p>{project.description}</p>

                <div className="tag-list project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill small-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section container reveal">
          <div className="section-heading">
            <p className="eyebrow">Certifications</p>
            <h2>Professional learning milestones.</h2>
          </div>

          <div className="cert-grid">
            {certifications.map((certification) => (
              <article key={certification} className="cert-card">
                <div className="cert-mark">✓</div>
                <p>{certification}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section container reveal">
          <div className="contact-card">
            <div className="section-heading left-aligned">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something meaningful together.</h2>
            </div>

            <div className="contact-actions">
              <a className="button primary" href="mailto:santoshbhashkarreddynallamilli@gmail.com">
                Email Me
              </a>
              <a
                className="button secondary"
                href="https://github.com/Santosh4512"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="button ghost"
                href="https://www.linkedin.com/in/santosh-bhashkar-reddy-nallamilli-696b5a330/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="contact-details">
              <p>
                <span>Email:</span>{' '}
                <a href="mailto:santoshbhashkarreddynallamilli@gmail.com">
                  santoshbhashkarreddynallamilli@gmail.com
                </a>
              </p>
              <p>
                <span>LinkedIn:</span>{' '}
                <a
                  href="https://www.linkedin.com/in/santosh-bhashkar-reddy-nallamilli-696b5a330/"
                  target="_blank"
                  rel="noreferrer"
                >
                  santosh-bhashkar-reddy-nallamilli
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Santosh Reddy. All rights reserved.</p>
          <div className="footer-links" aria-label="Footer links">
            <a href="https://github.com/Santosh4512" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/santosh-bhashkar-reddy-nallamilli-696b5a330/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:santoshbhashkarreddynallamilli@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
