import { ArrowRight } from 'lucide-react'

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
                  className="rounded-lg bg-surface-container-high px-7 py-3.5 font-bold text-on-surface no-underline transition-all hover:bg-surface-container-highest"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="text-sm text-on-surface-variant">
                Saskatoon, SK · 403-612-2057 · shuangzp@gmail.com
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="rounded-2xl bg-surface-container-low p-6 shadow-[0_18px_50px_-24px_rgba(32,99,147,0.24)]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="font-label text-xs font-bold tracking-[0.2em] text-on-primary-container uppercase">
                    Snapshot
                  </div>
                  <div className="rounded-full bg-surface-container-high px-3 py-1 text-xs font-semibold text-primary">
                    Available May 2026
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl bg-surface-container-lowest p-4">
                    <div className="mb-1 font-headline text-lg font-bold text-on-surface">
                      Current Focus
                    </div>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      Full-stack product work, security hardening, and deployment
                      readiness for production-facing apps.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-surface-container-lowest p-4">
                      <div className="mb-1 font-headline text-base font-bold text-on-surface">
                        Tools
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        React, TypeScript, Django, Git, Linux, Tailwind
                      </p>
                    </div>
                    <div className="rounded-xl bg-surface-container-lowest p-4">
                      <div className="mb-1 font-headline text-base font-bold text-on-surface">
                        Priorities
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        Reliability, clear UX, secure defaults, thoughtful delivery
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-950 p-4 text-slate-100">
                    <div className="mb-2 font-label text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                      Working Style
                    </div>
                    <pre className="overflow-x-auto font-mono text-sm leading-6 whitespace-pre-wrap">{`build -> test -> refine
security -> usability -> polish
small details compound into trust`}</pre>
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

            <div className="grid gap-6 md:grid-cols-2">
              <article className="flex h-full flex-col rounded-xl bg-surface-container-low p-6 shadow-[0_14px_34px_-26px_rgba(32,99,147,0.28)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-24px_rgba(32,99,147,0.34)]">
                <h4 className="mb-2 font-headline text-2xl font-bold text-on-surface">
                  Prairie Amber Cattery
                </h4>
                <p className="mb-3 text-sm text-on-surface-variant">
                  <a
                    className="underline"
                    href="https://prairieambercattery.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    prairieambercattery.com
                  </a>{' '}
                  · Private Repository
                </p>
                <p className="mb-3 text-on-surface-variant">
                  Built and deployed a production web platform with role-based
                  admin tools and a multi-step application workflow.
                </p>
                <ul className="mb-5 list-disc space-y-1.5 pl-5 text-on-surface-variant">
                  <li>
                    Implemented security hardening with server sessions,
                    validation, rate limiting, CSRF/origin protections, and
                    audit logging.
                  </li>
                  <li>
                    Added privacy and reliability workflows including retention
                    purge, data export/delete requests, and backup/restore
                    drills.
                  </li>
                </ul>
                <div className="mt-auto flex flex-wrap gap-2">
                  {[
                    'React',
                    'TypeScript',
                    'TanStack Router/Start',
                    'Tailwind CSS',
                    'Node.js',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary-fixed-dim px-3 py-1 text-xs font-medium text-on-secondary-fixed"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>

              <article className="relative flex h-full flex-col rounded-xl bg-surface-container-low p-6 shadow-[0_14px_34px_-26px_rgba(32,99,147,0.28)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-24px_rgba(32,99,147,0.34)]">
                <a
                  className="absolute top-6 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-[0.18em] text-on-primary no-underline transition-opacity hover:opacity-85"
                  href="https://cashflowgofrontend.pages.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  DEMO
                </a>
                <h4 className="mb-2 font-headline text-2xl font-bold text-on-surface">
                  CashFlowGo
                </h4>
                <p className="mb-3 text-sm text-on-surface-variant">
                  <a
                    className="underline"
                    href="https://github.com/isthisjason/cashflowgo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/isthisjason/cashflowgo
                  </a>
                </p>
                <p className="mb-3 text-on-surface-variant">
                  Built and deployed a full-stack finance app (React + Django)
                  with session auth, CSRF/CORS protections, and profile-based
                  workflows.
                </p>
                <ul className="mb-5 list-disc space-y-1.5 pl-5 text-on-surface-variant">
                  <li>
                    Implemented transaction tracking, budget management,
                    subscription management, and monthly CSV export with
                    end-to-end API integration.
                  </li>
                  <li>
                    Improved production readiness through rate limiting, secure
                    cookie/header settings, and deployment config across Render
                    and Cloudflare Pages.
                  </li>
                </ul>
                <div className="mt-auto flex flex-wrap gap-2">
                  {['React', 'Django', 'Git', 'Chart.js', 'HTML/CSS'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary-fixed-dim px-3 py-1 text-xs font-medium text-on-secondary-fixed"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-surface-container py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-3 font-label text-sm font-bold tracking-[0.2em] text-on-primary-container uppercase">
              03 / EXPERIENCE
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-xl bg-surface-container-low p-6 shadow-[0_14px_34px_-26px_rgba(32,99,147,0.24)]">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="font-headline text-2xl font-bold text-on-surface">
                    Video Editor
                  </h3>
                  <span className="text-sm text-on-surface-variant">
                    Sept. 2018 - Dec. 2021
                  </span>
                </div>
                <p className="font-medium text-on-surface-variant">Case Media · Calgary, AB</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-on-surface-variant">
                  <li>
                    Delivered video content for multiple clients while meeting
                    tight deadlines with minimal supervision.
                  </li>
                  <li>
                    Enhanced storytelling impact through intentional sound
                    design and visual composition.
                  </li>
                </ul>
              </article>
              <article className="rounded-xl bg-surface-container-low p-6 shadow-[0_14px_34px_-26px_rgba(32,99,147,0.24)]">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="font-headline text-2xl font-bold text-on-surface">
                    Associate
                  </h3>
                  <span className="text-sm text-on-surface-variant">
                    May 2017 - March 2020
                  </span>
                </div>
                <p className="font-medium text-on-surface-variant">Walmart Inc · Calgary, AB</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-on-surface-variant">
                  <li>
                    Served high volumes of customers daily, resolving inquiries
                    efficiently to maintain a positive in-store experience.
                  </li>
                  <li>
                    Onboarded and mentored new staff, improving team readiness
                    and procedural consistency.
                  </li>
                </ul>
              </article>
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
