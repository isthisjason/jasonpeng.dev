import { useEffect } from 'react'
import type { ThemeMode } from './ThemeToggle'

const CHATBOT_SCRIPT_ID = 'portfolio-chatbot-widget-script'
const CHATBOT_GLOBAL = 'PortfolioChatbotWidget'
const LOCAL_WIDGET_URL = '/widget.js'

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
    const scriptUrl = getWidgetScriptUrl()
    const config = buildChatbotConfig(mode)

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
