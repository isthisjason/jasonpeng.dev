import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import appCss from '../styles.css?url'
import { PortfolioChatbotEmbed } from '../components/PortfolioChatbotEmbed'
import { CursorRipple } from '../components/CursorRipple'
import ThemeToggle, { type ThemeMode } from '../components/ThemeToggle'

const siteUrl = 'https://jasonpeng.dev'
const siteTitle = 'Jason Peng | Full-Stack Software Engineer'
const siteDescription =
  'Jason Peng is a full-stack software engineer and Computer Science graduate building React, TypeScript, Java, Python, cloud, security, and AI-assisted product systems.'
const siteKeywords =
  'Jason Peng, full-stack software engineer, software developer portfolio, React, TypeScript, Java, Spring Boot, Python, FastAPI, Cloudflare Workers, AWS, PostgreSQL, security hardening, RAG chatbot, PyTorch'
const socialImage = `${siteUrl}/logo512.png`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteTitle,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        name: 'keywords',
        content: siteKeywords,
      },
      {
        name: 'author',
        content: 'Jason Peng',
      },
      {
        name: 'creator',
        content: 'Jason Peng',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'theme-color',
        content: '#b5562f',
      },
      {
        name: 'application-name',
        content: 'Jason Peng Portfolio',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Jason Peng',
      },
      {
        name: 'referrer',
        content: 'strict-origin-when-cross-origin',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: siteUrl,
      },
      {
        property: 'og:title',
        content: siteTitle,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:site_name',
        content: 'Jason Peng Portfolio',
      },
      {
        property: 'og:image',
        content: socialImage,
      },
      {
        property: 'og:image:width',
        content: '512',
      },
      {
        property: 'og:image:height',
        content: '512',
      },
      {
        property: 'og:image:alt',
        content: 'Blue robot favicon for Jason Peng',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: siteTitle,
      },
      {
        name: 'twitter:description',
        content: siteDescription,
      },
      {
        name: 'twitter:image',
        content: socialImage,
      },
      {
        name: 'twitter:image:alt',
        content: 'Blue robot favicon for Jason Peng',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'canonical',
        href: siteUrl,
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'icon',
        href: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('dark')

  useEffect(() => {
    const initialMode = resolveInitialTheme()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  function toggleMode() {
    const nextMode: ThemeMode = mode === 'dark' ? 'light' : 'dark'
    setMode(nextMode)
    applyThemeMode(nextMode)
    window.localStorage.setItem('theme', nextMode)
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(181,86,47,0.22)]">
        {children}
        <ThemeToggle mode={mode} onToggle={toggleMode} />
        <PortfolioChatbotEmbed mode={mode} />
        <CursorRipple />
        <Scripts />
      </body>
    </html>
  )
}

function resolveInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyThemeMode(mode: ThemeMode) {
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(mode)
  document.documentElement.setAttribute('data-theme', mode)
}
