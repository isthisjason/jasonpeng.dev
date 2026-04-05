import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'
import { PortfolioChatbotEmbed } from '../components/PortfolioChatbotEmbed'

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
        title: 'Jason Peng | Portfolio',
      },
      {
        name: 'description',
        content:
          'Portfolio site for Jason Peng, a Computer Science new graduate focused on full-stack engineering, security hardening, and reliable product delivery.',
      },
      {
        name: 'referrer',
        content: 'strict-origin-when-cross-origin',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
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
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        {children}
        <PortfolioChatbotEmbed />
        <Scripts />
      </body>
    </html>
  )
}
