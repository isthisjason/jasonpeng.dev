import { defineConfig } from 'vitest/config'

// The portfolio unit tests can run without starting the Cloudflare Worker emulator.
export default defineConfig({ resolve: { tsconfigPaths: true } })
