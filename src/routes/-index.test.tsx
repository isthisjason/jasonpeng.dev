// @vitest-environment jsdom

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HomePage } from '../components/HomePage'

describe('HomePage', () => {
  it('renders the main heading and key navigation targets', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', {
        name: /building secure, production-ready web software/i,
      }),
    ).toBeTruthy()

    expect(screen.getByRole('link', { name: /^about$/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: /^view projects$/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: /github profile/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: /demo/i })).toBeTruthy()
    expect(screen.getByText(/01 \/ education/i)).toBeTruthy()
    expect(screen.getByText(/future portrait area/i)).toBeTruthy()
    expect(screen.getByText(/portfolio ai assistant/i)).toBeTruthy()
  })
})
