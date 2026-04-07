import { describe, expect, it } from 'vitest'

import { buildChatbotConfig } from './PortfolioChatbotEmbed'
import { heroHeading, projectCards, skillGroups } from './HomePage'

describe('theme UI configuration', () => {
  it('builds a light-theme chatbot config', () => {
    const config = buildChatbotConfig('light')

    expect(config.theme).toBe('light')
    expect(config.title).toBe('Ask Jason')
    expect(config.source).toBe('portfolio-widget')
  })

  it('exports the portfolio content used by the homepage', () => {
    expect(heroHeading).toBe("Hi, I'm Jason.")
    expect(projectCards.some((project) => project.title === 'Portfolio LLM Assistant')).toBe(true)
    expect(skillGroups.some((group) => group.label === 'Languages')).toBe(true)
  })
})
