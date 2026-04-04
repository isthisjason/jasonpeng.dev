import {
  ArrowRight,
  Bot,
  Sparkles,
  UserRound,
} from 'lucide-react'

const projectCards = [
  {
    title: 'Portfolio AI Assistant',
    eyebrow: 'In Progress',
    href: '#projects',
    hrefLabel: 'Floating portfolio widget concept',
    description:
      'Scaffolding a bottom-right portfolio chat widget that helps recruiters and collaborators explore projects, experience, and technical strengths without leaving the page.',
    highlights: [
      'Planning the embed as a script-loaded widget so the portfolio site can stay simple while the chatbot ships from its own Cloudflare Pages + Worker project.',
      'Mapping the first version around a focused system prompt, structured portfolio context, and a compact floating UI that feels native to the site.',
    ],
    tech: ['React', 'TypeScript', 'Prompt Design', 'LLM Integration'],
    featured: true,
  },
  {
    title: 'Prairie Amber Cattery',
    eyebrow: 'Production',
    href: 'https://prairieambercattery.com',
    hrefLabel: 'prairieambercattery.com',
    description:
      'Built and deployed a production web platform with role-based admin tools and a multi-step application workflow.',
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
      'Built and deployed a full-stack finance app (React + Django) with session auth, CSRF/CORS protections, and profile-based workflows.',
    highlights: [
      'Implemented transaction tracking, budget management, subscription management, and monthly CSV export with end-to-end API integration.',
      'Improved production readiness through rate limiting, secure cookie/header settings, and deployment config across Render and Cloudflare Pages.',
    ],
    tech: ['React', 'Django', 'Git', 'Chart.js', 'HTML/CSS'],
    demoHref: 'https://cashflowgofrontend.pages.dev/',
  },
]

const workExperience = [
  {
    title: 'Video Editor',
    dates: 'Sept. 2018 - Dec. 2021',
    company: 'Case Media',
    location: 'Calgary, AB',
    bullets: [
      'Delivered video content for multiple clients while meeting tight deadlines with minimal supervision.',
      'Enhanced storytelling impact through intentional sound design and visual composition.',
    ],
  },
  {
    title: 'Associate',
    dates: 'May 2017 - March 2020',
    company: 'Walmart Inc',
    location: 'Calgary, AB',
    bullets: [
      'Served high volumes of customers daily, resolving inquiries efficiently to maintain a positive in-store experience.',
      'Onboarded and mentored new staff, improving team readiness and procedural consistency.',
    ],
  },
]

export function HomePage() {
  return (
    <>
      <nav className="fixed top-0 z-50 flex h-20 w-full items-center bg-surface-container-lowest/80 shadow-[0_10px_30px_-18px_rgba(32,99,147,0.28)] backdrop-blur-xl">
        <div className="relative mx-auto flex w-full max-w-7xl items-center px-8">
          <a href="#top" className="font-headline text-xl font-bold tracking-tight text-on-surface no-underline">
            Jason Peng
          </a>
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-8 md:flex">
            <a className="top-nav-link" href="#about">
              About
            </a>
            <a className="top-nav-link" href="#projects">
              Projects
            </a>
            <a className="top-nav-link" href="#experience">
              Experience
            </a>
            <a className="top-nav-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main id="top" className="pt-20">
        <section className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-8 py-10 md:min-h-[640px] md:py-14">
          <div className="absolute inset-x-8 top-12 -z-10 h-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(84,136,175,0.18),_transparent_66%)] blur-3xl" />

          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-10">
            <div className="w-full space-y-5 lg:w-3/5">
              <div className="inline-block rounded-full bg-surface-container-high px-4 py-1.5 font-label text-xs font-bold tracking-widest text-primary uppercase">
                CS New Grad · Expected June 2026
              </div>
              <h1 className="font-headline text-5xl leading-[0.92] font-bold tracking-tight text-on-surface md:text-7xl">
                Building secure, production-ready web software.
              </h1>
              <p className="max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant">
                I am a Computer Science student at the University of
                Saskatchewan focused on full-stack engineering, security
                hardening, and reliable product delivery.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-bold text-on-primary no-underline shadow-[0_12px_30px_-14px_rgba(32,99,147,0.45)] transition-all hover:scale-[1.02]"
                >
                  View Projects
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="https://github.com/isthisjason"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-surface-container-low px-7 py-3.5 font-bold text-on-surface no-underline transition-all hover:bg-surface-container-high"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="text-sm text-on-surface-variant">
                Saskatoon, SK · 403-612-2057 · shuangzp@gmail.com
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="rounded-[1.75rem] bg-slate-950 p-6 text-slate-100 shadow-[0_20px_60px_-26px_rgba(18,34,46,0.58)]">
                <div className="overflow-hidden rounded-[1.5rem] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(17,24,39,0.88)_0%,rgba(15,23,42,0.94)_100%)]">
                  <div className="flex min-h-[28rem] items-center justify-center p-8">
                    <div className="flex max-w-[16rem] flex-col items-center text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
                        <UserRound className="h-10 w-10" />
                      </div>
                      <div className="mt-5 text-sm font-semibold tracking-[0.18em] text-cyan-100 uppercase">
                        Future Portrait Area
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">
                        Reserved for a professional photo. This hero card can
                        become your image slot later without changing the rest
                        of the layout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-surface-container-low py-12 md:py-14">
          <div className="mx-auto grid max-w-7xl gap-6 px-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h2 className="mb-3 font-label text-sm font-bold tracking-[0.2em] text-on-primary-container uppercase">
                01 / EDUCATION
              </h2>
              <h3 className="font-headline text-3xl leading-tight font-bold text-on-surface md:text-4xl">
                University of Saskatchewan
              </h3>
            </div>
            <div className="space-y-3 md:col-span-8">
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Bachelor of Science in Computer Science, expected June 2026.
              </p>
              <p className="text-on-surface-variant">
                Saskatoon, SK · GPA: 3.49
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-surface py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-3 font-label text-sm font-bold tracking-[0.2em] text-on-primary-container uppercase">
              02 / PROJECTS
            </h2>
            <h3 className="mb-8 font-headline text-4xl font-bold text-on-surface md:text-5xl">
              Selected Work
            </h3>

            <div className="grid gap-6 xl:grid-cols-3">
              {projectCards.map((project) => (
                <article
                  key={project.title}
                  className={`flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 ${
                    project.featured
                      ? 'bg-[linear-gradient(180deg,_#0f1f2b_0%,_#132838_100%)] text-slate-100 shadow-[0_20px_48px_-24px_rgba(15,31,43,0.48)]'
                      : 'bg-surface-container-low shadow-[0_14px_34px_-26px_rgba(32,99,147,0.28)] hover:shadow-[0_18px_42px_-24px_rgba(32,99,147,0.34)]'
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <div
                        className={`mb-2 text-xs font-bold tracking-[0.2em] uppercase ${
                          project.featured ? 'text-cyan-200/80' : 'text-on-primary-container'
                        }`}
                      >
                        {project.eyebrow}
                      </div>
                      <h4
                        className={`font-headline text-2xl font-bold ${
                          project.featured ? 'text-white' : 'text-on-surface'
                        }`}
                      >
                        {project.title}
                      </h4>
                    </div>
                    {project.demoHref ? (
                      <a
                        className="rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-[0.18em] text-on-primary no-underline transition-opacity hover:opacity-85"
                        href={project.demoHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        DEMO
                      </a>
                    ) : null}
                  </div>

                  <p
                    className={`mb-3 text-sm ${
                      project.featured ? 'text-cyan-100/75' : 'text-on-surface-variant'
                    }`}
                  >
                    <a
                      className={project.featured ? 'underline' : 'underline'}
                      href={project.href}
                      target={project.href.startsWith('http') ? '_blank' : undefined}
                      rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {project.hrefLabel}
                    </a>
                  </p>

                  <p
                    className={`mb-3 leading-relaxed ${
                      project.featured ? 'text-slate-200' : 'text-on-surface-variant'
                    }`}
                  >
                    {project.description}
                  </p>

                  <ul
                    className={`mb-5 list-disc space-y-1.5 pl-5 ${
                      project.featured ? 'text-slate-300' : 'text-on-surface-variant'
                    }`}
                  >
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          project.featured
                            ? 'bg-white/10 text-cyan-50'
                            : 'bg-secondary-fixed-dim text-on-secondary-fixed'
                        }`}
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

        <section id="experience" className="bg-surface-container py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-3 font-label text-sm font-bold tracking-[0.2em] text-on-primary-container uppercase">
              03 / EXPERIENCE
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {workExperience.map((role) => (
                <article
                  key={role.title}
                  className="rounded-xl bg-surface-container-low p-6 shadow-[0_14px_34px_-26px_rgba(32,99,147,0.24)]"
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="font-headline text-2xl font-bold text-on-surface">
                      {role.title}
                    </h3>
                    <span className="text-sm text-on-surface-variant">
                      {role.dates}
                    </span>
                  </div>
                  <p className="font-medium text-on-surface-variant">
                    {role.company} · {role.location}
                  </p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-on-surface-variant">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-3 font-label text-sm font-bold tracking-[0.2em] text-on-primary-container uppercase">
              04 / TECHNICAL SKILLS
            </h2>
            <div className="space-y-3 text-on-surface-variant">
              <p>
                <span className="font-semibold text-on-surface">Languages:</span>{' '}
                Python, Java, C, RISC-V, Scala, TypeScript, JavaScript
              </p>
              <p>
                <span className="font-semibold text-on-surface">Frameworks/Libraries:</span>{' '}
                React, TanStack Router/Start, Django, Tailwind CSS, PyTorch,
                Chart.js
              </p>
              <p>
                <span className="font-semibold text-on-surface">Developer Tools:</span>{' '}
                Git, Linux, Vim, Make, npm
              </p>
              <p>
                <span className="font-semibold text-on-surface">Current Exploration:</span>{' '}
                LLM application UX, prompt design, grounded responses, and chat
                interface patterns for portfolio experiences
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-surface-container-lowest py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-8">
            <div className="rounded-2xl bg-primary p-8 text-on-primary shadow-[0_20px_50px_-28px_rgba(32,99,147,0.45)] lg:p-10">
              <h3 className="mb-4 font-headline text-4xl leading-tight font-bold md:text-5xl">
                Let&apos;s connect.
              </h3>
              <p className="mb-5 max-w-3xl text-lg leading-relaxed text-slate-100/82">
                I&apos;m actively preparing for new grad software roles and would
                love to chat about engineering opportunities.
              </p>
              <div className="flex flex-wrap gap-6 text-sm sm:text-base">
                <a
                  href="mailto:shuangzp@gmail.com"
                  className="font-semibold text-white underline underline-offset-4"
                >
                  shuangzp@gmail.com
                </a>
                <a
                  href="https://github.com/isthisjason"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white underline underline-offset-4"
                >
                  github.com/isthisjason
                </a>
                <span className="font-semibold text-white">403-612-2057</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="pointer-events-none fixed right-5 bottom-5 z-40 hidden w-[min(22rem,calc(100vw-2rem))] md:block">
        <div className="rounded-[1.6rem] border border-slate-800 bg-slate-950/96 p-3 text-slate-100 shadow-[0_30px_80px_-28px_rgba(15,23,42,0.7)] backdrop-blur">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-200">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Portfolio Assistant
              </div>
              <div className="text-xs text-slate-400">
                Floating widget concept
              </div>
            </div>
            <div className="ml-auto rounded-full bg-emerald-400/12 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
              Online
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="max-w-[85%] rounded-2xl bg-white/7 px-3 py-2.5 text-sm text-slate-200">
              What kind of engineer is Jason?
            </div>
            <div className="max-w-[90%] rounded-2xl bg-cyan-300/10 px-3 py-2.5 text-sm leading-relaxed text-cyan-50">
              Full-stack focused, with strong attention to deployment
              readiness, security hardening, and clean product delivery.
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400">
            Ask about experience, projects, or stack
            <Sparkles className="ml-auto h-4 w-4 text-cyan-300" />
          </div>
        </div>
      </div>

      <footer className="w-full bg-slate-950 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 text-sm text-slate-300 md:flex-row">
          <div className="font-headline text-lg font-bold text-white">
            Jason Peng
          </div>
        </div>
      </footer>
    </>
  )
}
