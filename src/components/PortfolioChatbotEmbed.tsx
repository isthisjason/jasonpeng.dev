import { useEffect } from 'react'

const CHATBOT_SCRIPT_ID = 'portfolio-chatbot-widget-script'
const CHATBOT_GLOBAL = 'PortfolioChatbotWidget'

type ChatbotConfig = {
  apiBaseUrl: string
  title?: string
  subtitle?: string
  source?: string
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
    'http://127.0.0.1:4173/dist/widget.js'
  )
}

function getApiBaseUrl() {
  return (
    import.meta.env.VITE_CHATBOT_API_BASE_URL ||
    'http://127.0.0.1:8787'
  )
}

export function PortfolioChatbotEmbed() {
  useEffect(() => {
    const scriptUrl = getWidgetScriptUrl()
    const config: ChatbotConfig = {
      apiBaseUrl: getApiBaseUrl(),
      title: 'Ask Jason',
      subtitle:
        'Recruiter-focused answers grounded in public portfolio and resume details.',
      source: 'portfolio-widget',
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

    const script = document.createElement('script')
    script.id = CHATBOT_SCRIPT_ID
    script.src = scriptUrl
    script.async = true
    script.defer = true
    script.setAttribute('data-api-base-url', config.apiBaseUrl)

    script.onload = () => {
      const chatbot = window[CHATBOT_GLOBAL]
      if (chatbot) {
        chatbot.updateConfig?.(config)
        chatbot.mount?.(config)
      }
    }

    document.body.appendChild(script)
  }, [])

  return null
}
