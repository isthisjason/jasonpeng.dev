import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <>
      <nav className="fixed top-0 z-50 flex h-20 w-full items-center bg-white/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8">
          <a href="#top" className="font-headline text-xl font-bold tracking-tight text-slate-950 no-underline">
            Jason Peng
          </a>
          <div className="hidden items-center space-x-8 md:flex">
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
          <a
            href="mailto:shuangzp@gmail.com"
            className="rounded-lg bg-primary px-6 py-2 font-medium text-on-primary no-underline shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-px hover:shadow-xl"
          >
            Email Me
          </a>
        </div>
      </nav>

      <main id="top" className="pt-20">
        <section className="relative mx-auto flex min-h-[860px] max-w-7xl flex-col justify-center px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="w-full space-y-8 lg:w-3/5">
              <div className="inline-block rounded-full bg-secondary-container px-4 py-1.5 font-label text-xs font-bold tracking-widest text-on-secondary-fixed uppercase">
                CS New Grad · Expected June 2026
              </div>
              <h1 className="font-headline text-5xl leading-[0.9] font-bold tracking-tight text-primary md:text-7xl">
                Building secure, production-ready web software.
              </h1>
              <p className="max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant">
                I am a Computer Science student at the University of
                Saskatchewan focused on full-stack engineering, security
                hardening, and reliable product delivery.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-on-primary no-underline shadow-2xl transition-all hover:scale-[1.02]"
                >
                  View Projects
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
                <a
                  href="https://github.com/isthisjason"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-surface-container-high px-8 py-4 font-bold text-on-surface no-underline transition-all hover:bg-surface-container-highest"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="pt-2 text-sm text-on-surface-variant">
                Saskatoon, SK · 403-612-2057 · shuangzp@gmail.com
              </div>
            </div>
            <div className="relative w-full lg:w-2/5">
              <div className="aspect-square rotate-3 overflow-hidden rounded-xl shadow-2xl transition-transform duration-700 hover:rotate-0">
                <img
                  className="h-full w-full object-cover"
                  alt="Modern workspace with code on dual monitors"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPMvWQCe4tqVs5kY1SXs-qruvO4_PDRQmwgOQCRpRbWI4lhJocXr7aK00Vqo8E6ctboWMr1SOYHkbjuu5tlyJtzrMs6Xo57JJvZwwJEnotKqKqFopQ0Ef6mcC7fRrvohKHMW-4xedV0Ku-2PP6d66J8nnmbnifoo4Sp2UCyfwZtFkaMoiddym5KzI_ShlaCkpv7T7R4InvY4J7OeRSLa7Wg2bzEwayP8C-jH2n1hgyVloH0zF-w8PdvplaD3hFSj9RYJdtEP7pUwQ"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden rounded-lg bg-tertiary-container p-6 text-on-tertiary shadow-xl md:block">
                <div className="mb-2 font-label text-xs tracking-widest uppercase opacity-60">
                  Degree
                </div>
                <div className="font-headline text-lg font-bold">
                  B.Sc. Computer Science
                </div>
                <div className="mt-1 text-sm text-slate-300">GPA 3.49</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-surface-container-low py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="mb-4 font-label text-sm font-bold tracking-[0.2em] text-on-primary-container uppercase">
                01 / EDUCATION
              </h2>
              <h3 className="font-headline text-4xl leading-tight font-bold text-primary">
                University of Saskatchewan
              </h3>
            </div>
            <div className="space-y-5 md:col-span-8">
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Bachelor of Science in Computer Science, expected June 2026.
              </p>
              <p className="text-on-surface-variant">
                Saskatoon, SK · GPA: 3.49
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-surface py-28">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-4 font-label text-sm font-bold tracking-[0.2em] text-on-primary-container uppercase">
              02 / PROJECTS
            </h2>
            <h3 className="mb-14 font-headline text-5xl font-bold text-primary">
              Selected Work
            </h3>

            <div className="grid gap-10 md:grid-cols-2">
              <article className="flex h-full flex-col rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-all duration-500 hover:shadow-2xl">
                <h4 className="mb-2 font-headline text-2xl font-bold text-primary">
                  Prairie Amber Cattery
                </h4>
                <p className="mb-4 text-sm text-on-surface-variant">
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
                <p className="mb-4 text-on-surface-variant">
                  Built and deployed a production web platform with role-based
                  admin tools and a multi-step application workflow.
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-5 text-on-surface-variant">
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

              <article className="flex h-full flex-col rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-all duration-500 hover:shadow-2xl">
                <h4 className="mb-2 font-headline text-2xl font-bold text-primary">
                  CashFlowGo
                </h4>
                <p className="mb-4 text-sm text-on-surface-variant">
                  <a
                    className="underline"
                    href="https://github.com/isthisjason/cashflowgo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/isthisjason/cashflowgo
                  </a>
                </p>
                <p className="mb-4 text-on-surface-variant">
                  Built and deployed a full-stack finance app (React + Django)
                  with session auth, CSRF/CORS protections, and profile-based
                  workflows.
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-5 text-on-surface-variant">
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

        <section id="experience" className="bg-surface-container py-24">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-4 font-label text-sm font-bold tracking-[0.2em] text-on-primary-container uppercase">
              03 / EXPERIENCE
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
              <article className="rounded-xl bg-surface-container-lowest p-8">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    Video Editor
                  </h3>
                  <span className="text-sm text-on-surface-variant">
                    Sept. 2018 - Dec. 2021
                  </span>
                </div>
                <p className="font-medium text-on-surface-variant">Case Media · Calgary, AB</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-on-surface-variant">
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
              <article className="rounded-xl bg-surface-container-lowest p-8">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    Associate
                  </h3>
                  <span className="text-sm text-on-surface-variant">
                    May 2017 - March 2020
                  </span>
                </div>
                <p className="font-medium text-on-surface-variant">Walmart Inc · Calgary, AB</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-on-surface-variant">
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

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-4 font-label text-sm font-bold tracking-[0.2em] text-on-primary-container uppercase">
              04 / TECHNICAL SKILLS
            </h2>
            <div className="space-y-5 text-on-surface-variant">
              <p>
                <span className="font-semibold text-primary">Languages:</span>{' '}
                Python, Java, C, RISC-V, Scala, TypeScript, JavaScript
              </p>
              <p>
                <span className="font-semibold text-primary">Frameworks/Libraries:</span>{' '}
                React, TanStack Router/Start, Django, Tailwind CSS, PyTorch,
                Chart.js
              </p>
              <p>
                <span className="font-semibold text-primary">Developer Tools:</span>{' '}
                Git, Linux, Vim, Make, npm
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-surface-container-lowest py-28">
          <div className="mx-auto max-w-7xl px-8">
            <div className="rounded-2xl bg-primary p-12 text-on-primary lg:p-16">
              <h3 className="mb-6 font-headline text-5xl leading-tight font-bold">
                Let&apos;s connect.
              </h3>
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
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

      <footer className="mt-10 w-full bg-slate-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 text-sm text-slate-300 md:flex-row">
          <div className="font-headline text-lg font-bold text-white">
            Jason Peng
          </div>
          <div>© {new Date().getFullYear()} Jason Peng</div>
        </div>
      </footer>
    </>
  )
}
