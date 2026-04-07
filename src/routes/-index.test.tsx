import { describe, expect, it } from 'vitest'

import { heroHeading, projectCards } from '../components/HomePage'

describe('HomePage', () => {
  it('exposes the current homepage hero and featured projects', () => {
    expect(heroHeading).toBe("Hi, I'm Jason.")
    expect(projectCards.map((project) => project.title)).toEqual(
      expect.arrayContaining([
        'Portfolio LLM Assistant',
        'Prairie Amber Cattery',
        'CashFlowGo',
      ]),
    )
  })
})
