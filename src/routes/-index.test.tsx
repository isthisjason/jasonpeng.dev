import { describe, expect, it } from 'vitest'

import { heroHeading, projectCards } from '../components/HomePage'

describe('HomePage', () => {
  it('exposes the current homepage hero and featured projects', () => {
    expect(heroHeading).toBe("Hi, I'm Jason.")
    expect(projectCards.map((project) => project.title)).toEqual([
      'SignalAttention',
      'Portfolio LLM Assistant',
      'Prairie Amber Cattery',
      'CashFlowGo',
    ])
    expect(projectCards.find((project) => project.title === 'Portfolio LLM Assistant')?.eyebrow).toBe('Apr 2026')
    expect(projectCards.find((project) => project.title === 'Portfolio LLM Assistant')?.href).toBe('https://github.com/isthisjason/portfolio-chatbot')
    expect(projectCards.find((project) => project.title === 'CashFlowGo')?.href).toBe('https://github.com/isthisjason/cashflowgo')
    expect(projectCards.find((project) => project.title === 'SignalAttention')?.href).toBe('https://github.com/isthisjason/signal-attention')
    expect(projectCards.find((project) => project.title === 'Prairie Amber Cattery')?.href).toBe('https://prairieambercattery.com')
  })
})
