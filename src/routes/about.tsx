import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
        <p className="mb-2 font-label text-xs font-bold tracking-[0.16em] text-on-primary-container uppercase">
          About Jason
        </p>
        <h1 className="mb-4 font-headline text-4xl font-bold text-primary sm:text-5xl">
          New grad engineer focused on secure, production-ready products.
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-on-surface-variant">
          I am completing a B.Sc. in Computer Science at the University of
          Saskatchewan (expected June 2026). My recent projects center around
          full-stack development, application security, and reliability
          workflows in real deployments.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-on-surface-variant">
          <li>
            Built and deployed production applications with React, TypeScript,
            TanStack Start, Node.js, and Django.
          </li>
          <li>
            Implemented hardening patterns including rate limiting, CSRF/origin
            protections, secure session handling, and audit logging.
          </li>
          <li>
            Strong communication and execution from prior client-facing and
            deadline-driven roles.
          </li>
        </ul>
      </section>
    </main>
  )
}
