import {
  createServerEntry,
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server'

const handleRequest = createStartHandler(defaultStreamHandler)

export default createServerEntry({
  async fetch(request) {
    // Vite dev injects its own HMR scripts. Apply the production policy to built responses.
    if (import.meta.env.DEV) return handleRequest(request)

    const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))))
    const response = await handleRequest(request, { context: { nonce } })
    // Cloudflare applies public/_headers only to static assets served by its asset handler.
    const headers = new Headers(response.headers)
    headers.set('X-Content-Type-Options', 'nosniff')
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    headers.set('X-Frame-Options', 'DENY')
    headers.set('Permissions-Policy', 'camera=(), geolocation=(), microphone=()')
    headers.set('Content-Security-Policy', [
      "default-src 'self'",
      "img-src 'self' data:",
      `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com`,
      "style-src-attr 'none'",
      "font-src 'self' https://fonts.gstatic.com",
      `script-src 'self' 'nonce-${nonce}' https://jasonpengdevsite.shuangzp.workers.dev https://challenges.cloudflare.com`,
      "connect-src 'self' https://chatbot-assistant-api.shuangzp.workers.dev https://chatbot-assistant-api-preview.shuangzp.workers.dev https://challenges.cloudflare.com",
      'frame-src https://challenges.cloudflare.com',
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      'upgrade-insecure-requests',
    ].join('; '))

    // Each document must carry the same one-time nonce in its markup and response header.
    if (headers.get('Content-Type')?.startsWith('text/html')) {
      headers.set('Cache-Control', 'no-store')
    }

    return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
  },
})
