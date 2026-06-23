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
    expect(skillGroups.map((group) => group.label)).toEqual([
      'Languages',
      'Frontend',
      'Backend and APIs',
      'Cloud and Dev Tools',
      'AI and ML',
    ])
    expect(skillGroups.find((group) => group.label === 'Languages')?.items).toEqual(expect.arrayContaining(['Java', 'Python', 'TypeScript']))
    expect(skillGroups.find((group) => group.label === 'Backend and APIs')?.items).toEqual(expect.arrayContaining(['Spring Boot', 'FastAPI', 'Cloudflare D1']))
    expect(skillGroups.flatMap((group) => group.items)).toEqual(expect.arrayContaining(['PyTorch', 'Vitest', 'Biome']))
  })
})
