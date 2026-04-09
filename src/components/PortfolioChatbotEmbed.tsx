import { useEffect } from 'react'
import type { ThemeMode } from './ThemeToggle'

const CHATBOT_SCRIPT_ID = 'portfolio-chatbot-widget-script'
const CHATBOT_GLOBAL = 'PortfolioChatbotWidget'
const LOCAL_WIDGET_URL = '/widget.js'
const DEV_WIDGET_ORIGINS = new Set(['http://127.0.0.1:4173', 'http://localhost:4173'])
const PROD_WIDGET_ORIGINS = new Set([
  'https://jasonpengdevsite.shuangzp.workers.dev',
])
const DEV_API_ORIGINS = new Set(['http://127.0.0.1:8787', 'http://localhost:8787'])
const PROD_API_ORIGINS = new Set([
  'https://chatbot-assistant-api.shuangzp.workers.dev',
  'https://chatbot-assistant-api-preview.shuangzp.workers.dev',
])

type ChatbotConfig = {
  apiBaseUrl: string
  title?: string
  subtitle?: string
  source?: string
  turnstileSiteKey?: string
  theme?: ThemeMode
}

type ChatbotApi = {
  mount: (overrides?: Partial<ChatbotConfig>) => unknown
  updateConfig: (overrides?: Partial<ChatbotConfig>) => unknown
}

declare global {
  interface Window {
    PortfolioChatbotConfig?: ChatbotConfig
    PortfolioChatbotWidget?: ChatbotApi
  }
}

function getWidgetScriptUrl() {
  return (
    import.meta.env.VITE_CHATBOT_WIDGET_URL ||
    LOCAL_WIDGET_URL
  )
}

function getApiBaseUrl() {
  return (
    import.meta.env.VITE_CHATBOT_API_BASE_URL ||
    'http://127.0.0.1:8787'
  )
}

function getTurnstileSiteKey() {
  return import.meta.env.VITE_TURNSTILE_SITE_KEY || ''
}

function resolveTrustedUrl(
  candidate: string,
  fallback: string,
  allowedOrigins: Set<string>,
  label: 'widget' | 'api',
) {
  const fallbackUrl = new URL(fallback, window.location.origin)

  try {
    const parsed = new URL(candidate, window.location.origin)
    const isLocalhost = parsed.hostname === '127.0.0.1' || parsed.hostname === 'localhost'
    const isAllowedOrigin =
      parsed.origin === window.location.origin || allowedOrigins.has(parsed.origin)
    const hasAllowedProtocol =
      parsed.protocol === 'https:' || (parsed.protocol === 'http:' && isLocalhost)

    if (!isAllowedOrigin || !hasAllowedProtocol) {
      throw new Error('untrusted origin or protocol')
    }

    if (label === 'widget' && !parsed.pathname.endsWith('.js')) {
      throw new Error('widget URL must end with .js')
    }

    return parsed.toString()
  } catch (error) {
    console.warn(`[portfolio-chatbot] rejected untrusted ${label} URL`, {
      candidate,
      fallback: fallbackUrl.toString(),
      reason: error instanceof Error ? error.message : 'invalid url',
    })
    return fallbackUrl.toString()
  }
}

function getTrustedWidgetScriptUrl() {
  const allowedOrigins = new Set([
    ...DEV_WIDGET_ORIGINS,
    ...PROD_WIDGET_ORIGINS,
  ])
  return resolveTrustedUrl(
    getWidgetScriptUrl(),
    LOCAL_WIDGET_URL,
    allowedOrigins,
    'widget',
  )
}

function getTrustedApiBaseUrl() {
  const allowedOrigins = new Set([
    ...DEV_API_ORIGINS,
    ...PROD_API_ORIGINS,
  ])
  const isLocalHost =
    window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
  const fallback = isLocalHost
    ? 'http://127.0.0.1:8787'
    : 'https://chatbot-assistant-api.shuangzp.workers.dev'
  const trusted = resolveTrustedUrl(
    getApiBaseUrl(),
    fallback,
    allowedOrigins,
    'api',
  )
  return trusted.replace(/\/$/, '')
}

type PortfolioChatbotEmbedProps = {
  mode: ThemeMode
}

export function buildChatbotConfig(mode: ThemeMode): ChatbotConfig {
  return {
    apiBaseUrl: getApiBaseUrl(),
    title: 'Ask Jason',
    subtitle:
      'Recruiter-focused answers grounded in public portfolio and resume details.',
    source: 'portfolio-widget',
    turnstileSiteKey: getTurnstileSiteKey(),
    theme: mode,
  }
}

export function PortfolioChatbotEmbed({ mode }: PortfolioChatbotEmbedProps) {
  useEffect(() => {
    const scriptUrl = getTrustedWidgetScriptUrl()
    const config = {
      ...buildChatbotConfig(mode),
      apiBaseUrl: getTrustedApiBaseUrl(),
    }

    window.PortfolioChatbotConfig = {
      ...(window.PortfolioChatbotConfig || {}),
      ...config,
    }

    const existingScript = document.getElementById(
      CHATBOT_SCRIPT_ID,
    ) as HTMLScriptElement | null

    if (existingScript) {
      const chatbot = window[CHATBOT_GLOBAL]
      if (chatbot) {
        chatbot.updateConfig?.(config)
        chatbot.mount?.(config)
      }
      return
    }

    const mountIfAvailable = () => {
      const chatbot = window[CHATBOT_GLOBAL]
      if (chatbot) {
        chatbot.updateConfig?.(config)
        chatbot.mount?.(config)
      }
    }

    const loadScript = (url: string) => {
      const script = document.createElement('script')
      script.id = CHATBOT_SCRIPT_ID
      script.src = url
      script.async = true
      script.defer = true
      script.setAttribute('data-api-base-url', config.apiBaseUrl)
      script.onload = mountIfAvailable
      script.onerror = () => {
        if (url !== LOCAL_WIDGET_URL) {
          script.remove()
          loadScript(LOCAL_WIDGET_URL)
        } else {
          console.error('[portfolio-chatbot] failed to load widget script', {
            attemptedUrl: scriptUrl,
            fallbackUrl: LOCAL_WIDGET_URL,
          })
        }
      }
      document.body.appendChild(script)
    }

    loadScript(scriptUrl)
  }, [mode])

  return null
}
