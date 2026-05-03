import { useEffect, useState } from 'react'
import { ArrowRight, ExternalLink, Menu, X } from 'lucide-react'

const sectionGlows: Record<string, { x: string; y: string; color: string }> = {
  top:        { x: '75%', y: '10%', color: 'var(--scroll-glow-1)' },
  about:      { x: '15%', y: '30%', color: 'var(--scroll-glow-2)' },
  projects:   { x: '80%', y: '50%', color: 'var(--scroll-glow-3)' },
  experience: { x: '20%', y: '60%', color: 'var(--scroll-glow-1)' },
  skills:     { x: '70%', y: '70%', color: 'var(--scroll-glow-2)' },
  contact:    { x: '40%', y: '85%', color: 'var(--scroll-glow-1)' },
}

function openChatbot() {
  const host = document.getElementById('portfolio-chatbot-widget')
  const launcher = host?.shadowRoot?.querySelector<HTMLElement>('.pcw-launcher')
  launcher?.click()
}

const heroHeading = "Hi, I'm Jason."

const projectCards = [
  {
    title: 'Portfolio LLM Assistant',
    eyebrow: 'Production',
    hrefLabel: null as string | null,
    demoAction: openChatbot,
    description:
      'Integrated an embedded LLM chatbot enabling visitors to explore projects, technical skills, and background through conversation.',
    highlights: [
      'Hardened the backend for production: strict input validation, CORS allowlists, rate limiting and abuse controls, LLM refusal behavior, observability, and secure secret management across environments.',
      'Ships as a script-loaded widget from its own Cloudflare Pages + Worker project, keeping the portfolio site simple and independently deployable.',
    ],
    tech: ['JavaScript', 'Cloudflare Workers', 'OpenAI API', 'Vite', 'Prompt Engineering'],
  },
  {
    title: 'Prairie Amber Cattery',
    eyebrow: 'Production',
    href: 'https://prairieambercattery.com',
    hrefLabel: 'prairieambercattery.com',
    description:
      'Built and deployed a production web platform with role based admin tools and a multi-step application workflow.',
    highlights: [
      'Implemented security hardening with server sessions, validation, rate limiting, CSRF/origin protections, and audit logging.',
      'Added privacy and reliability workflows including retention purge, data export/delete requests, and backup/restore drills.',
    ],
    tech: ['React', 'TypeScript', 'TanStack Router/Start', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'CashFlowGo',
    eyebrow: 'Live Demo',
    href: 'https://github.com/isthisjason/cashflowgo',
    hrefLabel: 'github.com/isthisjason/cashflowgo',
    description:
      'Built and deployed a full-stack finance app with session auth, CSRF/CORS protections, and profile based workflows.',
    highlights: [
      'Implemented transaction tracking, budget management, subscription management, and monthly CSV export with end to end API integration.',
      'Improved production readiness through rate limiting, secure cookie/header settings, and deployment config across Render and Cloudflare Pages.',
    ],
    tech: ['React', 'Django', 'Git', 'Chart.js', 'HTML/CSS'],
    demoHref: 'https://cashflowgofrontend.pages.dev/',
  },
]

const workExperience = [
  {
    title: 'Video Editor',
    dates: 'Sept. 2018 – Dec. 2021',
    company: 'Case Media',
    location: 'Calgary, AB',
    bullets: [
      'Delivered video content for multiple clients while meeting tight deadlines with minimal supervision.',
      'Enhanced storytelling impact through intentional sound design and visual composition.',
    ],
  },
  {
    title: 'Associate',
    dates: 'May 2017 – March 2020',
    company: 'Walmart Inc',
    location: 'Calgary, AB',
    bullets: [
      'Served high volumes of customers daily, resolving inquiries efficiently to maintain a positive instore experience.',
      'Onboarded and mentored new staff, improving team readiness and procedural consistency.',
    ],
  },
]

const skillGroups = [
  { label: 'Languages', items: ['Python', 'Java', 'C', 'RISC-V', 'Scala', 'TypeScript', 'JavaScript'] },
  { label: 'Frameworks / Libraries', items: ['React', 'TanStack Router/Start', 'Django', 'Tailwind CSS', 'PyTorch', 'Chart.js'] },
  { label: 'Developer Tools', items: ['Git', 'Linux', 'Vim', 'Make', 'npm'] },
  { label: 'Platforms', items: ['Cloudflare Workers', 'Cloudflare Pages', 'Render'] },
]

export function HomePage() {
  const [activeSection, setActiveSection] = useState('top')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id || 'top')
        }
      },
      { threshold: 0.25 },
    )
    document.querySelectorAll('section[id], main[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (revealTargets.length === 0) return

    const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (motionReduced) {
      revealTargets.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          revealObserver.unobserve(entry.target)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    for (const target of revealTargets) {
      const delay = target.dataset.revealDelay
      target.style.setProperty('--reveal-delay', `${Number(delay || 0)}ms`)
      revealObserver.observe(target)
    }

    return () => revealObserver.disconnect()
  }, [])

  const glow = sectionGlows[activeSection] ?? sectionGlows['top']

  return (
    <>
      {/* ── SCROLL GLOW ─────────────────────────────────────── */}
      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            left: glow.x,
            top: glow.y,
            width: '700px',
            height: '700px',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: glow.color,
            filter: 'blur(120px)',
            transition: 'left 1.4s ease, top 1.4s ease, background 1.4s ease',
          }}
        />
      </div>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="theme-surface fixed top-0 z-50 w-full border-b border-surface-container-high/60 bg-surface-container-lowest/90 shadow-[0_1px_0_color-mix(in_srgb,var(--color-primary)_12%,transparent)] backdrop-blur-xl">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-start px-5 sm:px-6 md:px-8">
          <a
            href="#top"
            className="hero-wordmark font-headline text-sm font-bold tracking-[0.15em] text-on-surface uppercase no-underline"
          >
            Jason Peng
          </a>
          <div className="ml-auto flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="button-reactive inline-flex min-h-[44px] w-11 items-center justify-center rounded-md border border-primary/35 text-primary"
            >
              {menuOpen
                ? <X className="h-4 w-4" aria-hidden="true" />
                : <Menu className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            <a className="top-nav-link" href="#about">About</a>
            <a className="top-nav-link" href="#projects">Projects</a>
            <a className="top-nav-link" href="#experience">Experience</a>
            <a className="top-nav-link" href="#contact">Contact</a>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN ─────────────────────────────────── */}
        {menuOpen && (
          <div className="md:hidden border-t border-surface-container-high/60 bg-surface-container-lowest/95 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-5">
              {[['About', '#about'], ['Projects', '#projects'], ['Experience', '#experience'], ['Skills', '#skills'], ['Contact', '#contact']].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[52px] items-center border-b border-surface-container-high/40 text-sm font-semibold text-on-surface-variant transition-colors duration-150 last:border-0 hover:text-on-surface"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main id="top" className="relative z-10 pt-16">
        {/* ── HERO ────────────────────────────────────────────── */}
        <div className="relative">
        <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-5 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
          <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-center lg:gap-10">
            {/* text */}
            <div className="relative z-10 flex-1 space-y-7 load-in-up">
              <h1 className="hero-title font-headline text-[clamp(2.55rem,10.5vw,6.25rem)] font-black leading-[0.92] tracking-[-0.02em] text-on-surface">
                Hi, I'm<br />Jason.
              </h1>

              <p className="theme-copy hero-accent-line max-w-md text-base leading-relaxed text-on-surface-variant sm:text-lg">
                I am a software developer who enjoys solving real problems.
                Whether it's a tricky UI, wiring up an API, or figuring out
                why something broke in prod.
              </p>

              <div className="flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="button-reactive group inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary no-underline shadow-[var(--interactive-shadow)] sm:w-auto"
                >
                  View Projects
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="https://github.com/isthisjason"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-reactive inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary/60 bg-transparent px-6 py-3 font-semibold text-primary no-underline sm:w-auto"
                >
                  GitHub Profile
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com/in/isthisjason"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-reactive inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary/60 bg-transparent px-6 py-3 font-semibold text-primary no-underline sm:w-auto"
                >
                  LinkedIn
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* photo */}
            <div className="relative shrink-0 load-in-up load-in-delay-2 lg:w-[340px] xl:w-[380px]">
              <div className="theme-surface accent-orbit overflow-hidden rounded-2xl border border-surface-container-high">
                <img
                  src="/photos/edited001v2jpg.jpg"
                  alt="Jason Peng portrait"
                  className="block h-full min-h-[18rem] w-full object-cover object-center sm:min-h-[22rem] md:min-h-[26rem]"
                  loading="eager"
                />
              </div>
              {/* offset accent border */}
              <div
                aria-hidden="true"
                className="absolute -bottom-2.5 -right-2.5 -z-10 h-full w-full rounded-2xl border border-primary/20"
              />
            </div>
          </div>
        </section>
        </div>

        {/* ── EDUCATION ───────────────────────────────────────── */}
        <section id="about" className="theme-surface relative bg-section-mid py-12 sm:py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <p className="theme-copy section-kicker mb-6 text-xs font-semibold tracking-[0.25em] uppercase">
              01 / Education
            </p>
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-5">
                <h2 className="theme-copy font-headline text-3xl font-bold leading-tight text-on-surface md:text-4xl">
                  University of<br />Saskatchewan
                </h2>
              </div>
              <div className="space-y-2 md:col-span-7 md:pt-1">
                <p className="theme-copy text-lg text-on-surface">
                  Bachelor of Science in Computer Science
                </p>
                <p className="theme-copy text-sm text-on-surface-variant/70">
                  GPA: 3.54
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ────────────────────────────────────────── */}
        <section id="projects" className="theme-surface border-t border-surface-container-high/30 bg-section-raised py-12 sm:py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <p className="theme-copy section-kicker mb-3 text-xs font-semibold tracking-[0.25em] uppercase">
              02 / Projects
            </p>

            <div className="grid gap-5 xl:grid-cols-3">
              {projectCards.map((project, index) => (
                <article
                  key={project.title}
                  data-reveal
                  data-reveal-delay={index * 70}
                  className="theme-surface accent-card reveal-card flex h-full flex-col rounded-xl border border-surface-container-high bg-surface-container p-6 transition-colors duration-300 hover:border-primary/45 hover:shadow-[0_20px_48px_color-mix(in_srgb,var(--color-primary)_16%,transparent)]"
                >
                  {/* card header */}
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="theme-copy section-kicker mb-1.5 text-xs font-semibold tracking-[0.2em] uppercase">
                        {project.eyebrow}
                      </p>
                      <h3 className="theme-copy font-headline text-xl font-bold text-on-surface">
                        {project.title}
                      </h3>
                    </div>

                    {project.demoAction ? (
                      <button
                        type="button"
                        onClick={project.demoAction}
                        className="button-reactive inline-flex min-h-[44px] cursor-pointer whitespace-nowrap rounded-md border border-primary/70 bg-primary px-3.5 py-2 text-sm font-semibold tracking-wide text-on-primary md:min-h-0 md:px-3 md:py-1 md:text-xs"
                      >
                        Demo
                      </button>
                    ) : project.demoHref ? (
                      <a
                        href={project.demoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-reactive inline-flex min-h-[44px] cursor-pointer whitespace-nowrap rounded-md border border-primary/70 bg-primary px-3.5 py-2 text-sm font-semibold tracking-wide text-on-primary no-underline md:min-h-0 md:px-3 md:py-1 md:text-xs"
                      >
                        Demo
                      </a>
                    ) : null}
                  </div>

                  {/* project link */}
                  {project.hrefLabel ? (
                    <a
                      href={project.href}
                      target={project.href?.startsWith('http') ? '_blank' : undefined}
                      rel={project.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-link mb-3 gap-1.5 text-sm text-on-surface-variant/45"
                    >
                      {project.hrefLabel}
                      <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                    </a>
                  ) : null}

                  {/* description */}
                  <p className="theme-copy mb-4 text-sm leading-relaxed text-on-surface-variant">
                    {project.description}
                  </p>

                  {/* highlights */}
                  <ul className="mb-5 space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="theme-copy flex gap-2.5 text-sm text-on-surface-variant/70">
                        <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* tech stack */}
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="theme-surface theme-copy accent-pill rounded-md px-2.5 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ──────────────────────────────────────── */}
        <section id="experience" className="theme-surface border-t border-surface-container-high/30 bg-section-mid py-12 sm:py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <p className="theme-copy section-kicker mb-6 text-xs font-semibold tracking-[0.25em] uppercase">
              03 / Experience
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {workExperience.map((role, index) => (
                <article
                  key={role.title}
                  data-reveal
                  data-reveal-delay={index * 70}
                  className="theme-surface accent-card reveal-card rounded-xl border border-surface-container-high bg-surface-container p-6"
                >
                  <div className="mb-1 flex items-start justify-between gap-4">
                    <h3 className="theme-copy font-headline text-xl font-bold text-on-surface">
                      {role.title}
                    </h3>
                    <span className="theme-copy shrink-0 pt-0.5 text-xs text-on-surface-variant/60">
                      {role.dates}
                    </span>
                  </div>
                  <p className="theme-copy mb-4 text-sm font-medium text-primary/70">
                    {role.company} · {role.location}
                  </p>
                  <ul className="space-y-2">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="theme-copy flex gap-2.5 text-sm text-on-surface-variant/70">
                        <span className="timeline-dot" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECHNICAL SKILLS ────────────────────────────────── */}
        <section id="skills" className="theme-surface relative border-t border-surface-container-high/30 bg-section-raised py-12 sm:py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <p className="theme-copy section-kicker mb-6 text-xs font-semibold tracking-[0.25em] uppercase">
              04 / Technical Skills
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map(({ label, items }, index) => (
                <div key={label} data-reveal data-reveal-delay={index * 55} className="reveal-card">
                  <h3 className="theme-copy section-kicker mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="theme-surface theme-copy accent-pill rounded-md px-2.5 py-1 text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────────── */}
        <section id="contact" className="theme-surface relative bg-section-raised py-14 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <p className="theme-copy section-kicker mb-6 text-xs font-semibold tracking-[0.25em] uppercase">
              05 / Contact
            </p>
            <h2 className="theme-copy font-headline text-4xl font-black leading-[0.94] tracking-[-0.02em] text-on-surface sm:text-5xl md:text-7xl">
              Let&apos;s<br />connect.
            </h2>
            <p className="theme-copy mt-5 max-w-lg text-base text-on-surface-variant sm:text-lg">
              You can reach me at:
            </p>
            <div className="mt-10 flex flex-wrap gap-6 sm:gap-8">
              <a
                href="mailto:shuangzp@gmail.com"
                className="inline-link group min-h-[44px] items-center gap-2 break-all font-semibold text-on-surface sm:break-normal"
              >
                shuangzp@gmail.com
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
              <a
                href="https://github.com/isthisjason"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link group min-h-[44px] items-center gap-2 break-all font-semibold text-on-surface sm:break-normal"
              >
                github.com/isthisjason
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
              <a
                href="https://linkedin.com/in/isthisjason"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link group min-h-[44px] items-center gap-2 break-all font-semibold text-on-surface sm:break-normal"
              >
                linkedin.com/in/isthisjason
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="theme-surface border-t border-surface-container-high/30 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 text-center sm:px-6 md:px-8">
          <span className="theme-copy font-headline text-xs font-bold tracking-[0.12em] text-on-surface-variant/50 uppercase md:tracking-[0.18em]">
            Why hello there, thanks for scrolling all the way down! 
          </span>
        </div>
      </footer>
    </>
  )
}

export { heroHeading, projectCards, skillGroups }
