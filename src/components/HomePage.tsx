import { useEffect, useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

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
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-start px-8">
          <a
            href="#top"
            className="hero-wordmark font-headline text-sm font-bold tracking-[0.15em] text-on-surface uppercase no-underline"
          >
            Jason Peng
          </a>
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            <a className="top-nav-link" href="#about">About</a>
            <a className="top-nav-link" href="#projects">Projects</a>
            <a className="top-nav-link" href="#experience">Experience</a>
            <a className="top-nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main id="top" className="relative z-10 pt-16">
        {/* ── HERO ────────────────────────────────────────────── */}
        <div className="relative">
        <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-8 py-16 md:py-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* text */}
            <div className="relative z-10 flex-1 space-y-7">
              <h1 className="hero-title font-headline text-[clamp(3.25rem,8vw,6.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-on-surface">
                Hi, I'm<br />Jason.
              </h1>

              <p className="theme-copy hero-accent-line max-w-md text-lg leading-relaxed text-on-surface-variant">
                I am a software developer who enjoys solving real problems.
                Whether it's a tricky UI, wiring up an API, or figuring out
                why something broke in prod.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="button-reactive group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary no-underline shadow-[var(--interactive-shadow)]"
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
                  rel="noreferrer"
                  className="button-reactive inline-flex cursor-pointer items-center gap-2 rounded-lg border border-primary/70 bg-primary px-6 py-3 font-semibold text-on-primary no-underline shadow-[var(--interactive-shadow)]"
                >
                  GitHub Profile
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com/in/isthisjason"
                  target="_blank"
                  rel="noreferrer"
                  className="button-reactive inline-flex cursor-pointer items-center gap-2 rounded-lg border border-primary/70 bg-primary px-6 py-3 font-semibold text-on-primary no-underline shadow-[var(--interactive-shadow)]"
                >
                  LinkedIn
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* photo */}
            <div className="relative shrink-0 lg:w-[360px] xl:w-[400px]">
              <div className="theme-surface accent-orbit overflow-hidden rounded-2xl border border-surface-container-high">
                <img
                  src="/photos/edited001v2jpg.jpg"
                  alt="Jason Peng portrait"
                  className="block h-full min-h-[26rem] w-full object-cover object-center"
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
        <section id="about" className="theme-surface relative bg-section-mid py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-8">
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
                  GPA: 3.49
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ────────────────────────────────────────── */}
        <section id="projects" className="theme-surface border-t border-surface-container-high/30 bg-section-raised py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-8">
            <p className="theme-copy section-kicker mb-3 text-xs font-semibold tracking-[0.25em] uppercase">
              02 / Projects
            </p>

            <div className="grid gap-5 xl:grid-cols-3">
              {projectCards.map((project) => (
                <article
                  key={project.title}
                  className="theme-surface accent-card flex h-full flex-col rounded-xl border border-surface-container-high bg-surface-container p-6 transition-colors duration-300 hover:border-primary/45 hover:shadow-[0_20px_48px_color-mix(in_srgb,var(--color-primary)_16%,transparent)]"
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
                        className="button-reactive inline-flex cursor-pointer whitespace-nowrap rounded-md border border-primary/70 bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-on-primary"
                      >
                        Demo
                      </button>
                    ) : project.demoHref ? (
                      <a
                        href={project.demoHref}
                        target="_blank"
                        rel="noreferrer"
                        className="button-reactive inline-flex cursor-pointer whitespace-nowrap rounded-md border border-primary/70 bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-on-primary no-underline"
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
                      rel={project.href?.startsWith('http') ? 'noreferrer' : undefined}
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
        <section id="experience" className="theme-surface border-t border-surface-container-high/30 bg-section-mid py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-8">
            <p className="theme-copy section-kicker mb-6 text-xs font-semibold tracking-[0.25em] uppercase">
              03 / Experience
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {workExperience.map((role) => (
                <article
                  key={role.title}
                  className="theme-surface accent-card rounded-xl border border-surface-container-high bg-surface-container p-6"
                >
                  <div className="mb-1 flex items-start justify-between gap-4">
                    <h3 className="theme-copy font-headline text-xl font-bold text-on-surface">
                      {role.title}
                    </h3>
                    <span className="theme-copy shrink-0 pt-0.5 text-xs text-on-surface-variant/35">
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
        <section id="skills" className="theme-surface relative border-t border-surface-container-high/30 bg-section-raised py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-8">
            <p className="theme-copy section-kicker mb-6 text-xs font-semibold tracking-[0.25em] uppercase">
              04 / Technical Skills
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map(({ label, items }) => (
                <div key={label}>
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
        <section id="contact" className="theme-surface relative bg-section-raised py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-8">
            <p className="theme-copy section-kicker mb-6 text-xs font-semibold tracking-[0.25em] uppercase">
              05 / Contact
            </p>
            <h2 className="theme-copy font-headline text-5xl font-black leading-[0.92] tracking-[-0.02em] text-on-surface md:text-7xl">
              Let&apos;s<br />connect.
            </h2>
            <p className="theme-copy mt-5 max-w-lg text-lg text-on-surface-variant">
              You can reach me at:
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              <a
                href="mailto:shuangzp@gmail.com"
                className="inline-link group gap-2 font-semibold text-on-surface"
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
                rel="noreferrer"
                className="inline-link group gap-2 font-semibold text-on-surface"
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
                rel="noreferrer"
                className="inline-link group gap-2 font-semibold text-on-surface"
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
          <span className="theme-copy font-headline text-xs font-bold tracking-[0.18em] text-on-surface-variant/25 uppercase">
            Why hello there, thanks for scrolling all the way down! 
          </span>
        </div>
      </footer>
    </>
  )
}

export { heroHeading, projectCards, skillGroups }
