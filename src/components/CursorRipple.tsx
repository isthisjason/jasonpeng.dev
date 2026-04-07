import { useEffect } from 'react'

interface MoveParticle {
  x: number
  y: number
  spawnX: number
  spawnY: number
  char: string
  fontSize: number
  vx: number
  vy: number
  perpX: number
  perpY: number
  waveAmp: number
  waveFreq: number
  wavePhase: number
  life: number
  speed: number
  maxDrift: number
  friction: number
}

interface BurstParticle {
  x: number        // document coords
  y: number
  spawnX: number
  spawnY: number
  char: string
  fontSize: number
  vx: number
  vy: number
  life: number
  speed: number
  friction: number
  maxDrift: number
}

interface ClickEffect {
  docX: number     // document coords — scrolls with page
  docY: number
  startTime: number
  particles: BurstParticle[]
  ringChars: string[][]   // pre-generated chars per ring so they don't flicker
  ringAngles: number[][]  // fixed angles per symbol — prevents spinning as count grows
  impactChars: string[]   // chars for the heartbeat cluster
}

const SYMBOLS         = '\\;\'+-=|><{}!?,:~^%#@/*&$'
const MAX_ALPHA       = 0.6
const SPAWN_DISTANCE  = 10
const MAX_PARTICLES   = 500
const SPAWN_COUNT     = 1
const MAX_DRIFT       = 85
const DARK_RIPPLE_RGB  = '96,165,250'
const LIGHT_RIPPLE_RGB = '30,64,175'
const BURST_COUNT      = 12
const CLICK_DURATION   = 950   // ms — slower, water-drop feel
const IMPACT_COUNT     = 8     // symbols in heartbeat cluster
const RING_POOL_SIZE   = 120   // pre-generated chars per ring (indexed dynamically)
const RING_MAX_COUNT   = 100   // max symbols per ring (golden-angle pre-baked)
// Golden angle: each symbol i sits at a fixed angle regardless of total count.
// As the ring grows and count increases, new symbols fill in gaps — no spinning.
const GOLDEN_ANGLE     = 2.39996323  // radians ≈ 137.508°

// Symbol ring definitions — arcSpacing keeps density constant as radius grows
const RING_DEFS = [
  { delay: 0,    maxR: 68,  arcSpacing: 10, fadePow: 2.2 },
  { delay: 0.09, maxR: 110, arcSpacing: 10, fadePow: 1.9 },
  { delay: 0.18, maxR: 152, arcSpacing: 10, fadePow: 1.6 },
] as const

function randChar() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
}

export function CursorRipple() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = document.createElement('canvas')
    canvas.style.cssText =
      'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:50'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')!

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const moveParticles: MoveParticle[] = []
    const clickEffects: ClickEffect[]   = []
    let lastX = -9999
    let lastY = -9999

    const isLightTheme = () =>
      document.documentElement.classList.contains('light') ||
      document.documentElement.dataset.theme === 'light'

    function onMouseMove(e: MouseEvent) {
      const dx    = e.clientX - lastX
      const dy    = e.clientY - lastY
      const dist2 = dx * dx + dy * dy
      if (dist2 < SPAWN_DISTANCE * SPAWN_DISTANCE) return
      lastX = e.clientX
      lastY = e.clientY

      const cursorSpeed = Math.sqrt(dist2)
      const speedFactor = Math.sqrt(cursorSpeed / SPAWN_DISTANCE)
      const docX = e.clientX + window.scrollX
      const docY = e.clientY + window.scrollY

      for (let i = 0; i < SPAWN_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2
        const radX  = Math.cos(angle)
        const radY  = Math.sin(angle)
        const drift = (0.25 + Math.random() * 0.4) * speedFactor

        moveParticles.push({
          x:         docX,
          y:         docY,
          spawnX:    docX,
          spawnY:    docY,
          char:      randChar(),
          fontSize:  9 + Math.random() * 8,
          vx:        radX * drift,
          vy:        radY * drift,
          perpX:     -radY,
          perpY:      radX,
          waveAmp:   5 + Math.random() * 8,
          waveFreq:  1.5 + Math.random() * 1.0,
          wavePhase: Math.random() * Math.PI * 2,
          life:      0,
          speed:     0.005 + Math.random() * 0.003,
          maxDrift:  MAX_DRIFT,
          friction:  0.98,
        })
      }

      if (moveParticles.length > MAX_PARTICLES) {
        moveParticles.splice(0, moveParticles.length - MAX_PARTICLES)
      }
    }

    function onClick(e: MouseEvent) {
      // Store in document coords so the effect scrolls with the page
      const docX = e.clientX + window.scrollX
      const docY = e.clientY + window.scrollY

      // Pre-generate chars and fixed golden-angle positions per ring
      const ringChars  = RING_DEFS.map(() => Array.from({ length: RING_POOL_SIZE }, randChar))
      const ringAngles = RING_DEFS.map(() =>
        Array.from({ length: RING_MAX_COUNT }, (_, i) => (i * GOLDEN_ANGLE) % (Math.PI * 2))
      )
      const impactChars = Array.from({ length: IMPACT_COUNT }, randChar)

      // Radial burst in document coords
      const particles: BurstParticle[] = Array.from({ length: BURST_COUNT }, (_, i) => {
        const angle = (i / BURST_COUNT) * Math.PI * 2
        const spd   = 2.2 + Math.random() * 1.8
        return {
          x: docX, y: docY, spawnX: docX, spawnY: docY,
          char:     randChar(),
          fontSize: 10 + Math.random() * 7,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          life: 0,
          speed:    0.022 + Math.random() * 0.008,
          friction: 0.93,
          maxDrift: 105,
        }
      })

      clickEffects.push({ docX, docY, startTime: performance.now(), particles, ringChars, ringAngles, impactChars })
      if (clickEffects.length > 8) clickEffects.splice(0, clickEffects.length - 8)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('click',     onClick,     { passive: true })

    let rafId: number

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const nowSec = Date.now() * 0.001
      const nowMs  = performance.now()
      const rgb    = isLightTheme() ? LIGHT_RIPPLE_RGB : DARK_RIPPLE_RGB
      const offX   = window.scrollX
      const offY   = window.scrollY

      // ── Mouse-move particles ─────────────────────────────
      for (let i = moveParticles.length - 1; i >= 0; i--) {
        const p = moveParticles[i]
        p.life += p.speed
        p.x    += p.vx
        p.y    += p.vy
        p.vx   *= p.friction
        p.vy   *= p.friction

        if (p.life >= 1) { moveParticles.splice(i, 1); continue }

        const drift   = Math.hypot(p.x - p.spawnX, p.y - p.spawnY)
        const spatial = Math.max(0, 1 - drift / p.maxDrift)
        const alpha   = MAX_ALPHA * spatial * Math.sin(Math.PI * p.life)
        if (alpha < 0.005) continue

        const envelope = Math.sin(Math.PI * p.life)
        const wave     = Math.sin(nowSec * p.waveFreq + p.wavePhase) * p.waveAmp * envelope
        const drawX    = (p.x - offX) + p.perpX * wave
        const drawY    = (p.y - offY) + p.perpY * wave

        ctx.font        = `${p.fontSize}px monospace`
        ctx.fillStyle   = `rgba(${rgb},${alpha.toFixed(3)})`
        ctx.shadowBlur  = 10
        ctx.shadowColor = `rgba(${rgb},${(alpha * 0.35).toFixed(3)})`
        ctx.fillText(p.char, drawX, drawY)
        ctx.shadowBlur  = 0
      }

      // ── Click effects ────────────────────────────────────
      for (let ei = clickEffects.length - 1; ei >= 0; ei--) {
        const effect  = clickEffects[ei]
        const elapsed = nowMs - effect.startTime
        const t       = elapsed / CLICK_DURATION

        if (t > 1) { clickEffects.splice(ei, 1); continue }

        // Viewport position — tracks scroll so it moves with the page
        const vpX = effect.docX - offX
        const vpY = effect.docY - offY

        // ── 1. Impact cluster: symbol ring that pulses like a heartbeat ──

        // First beat: t 0 → 0.14
        const b1 = Math.max(0, Math.min(1, t / 0.14))
        if (b1 > 0) {
          const pulse  = Math.sin(b1 * Math.PI)
          const radius = 13 * pulse
          const fs     = 8 + 5 * pulse
          ctx.font      = `${fs}px monospace`
          ctx.shadowBlur = 18
          for (let i = 0; i < IMPACT_COUNT; i++) {
            const angle = (i / IMPACT_COUNT) * Math.PI * 2
            const alpha = 0.85 * pulse
            ctx.fillStyle   = `rgba(${rgb},${alpha.toFixed(3)})`
            ctx.shadowColor = `rgba(${rgb},${(alpha * 0.45).toFixed(3)})`
            ctx.fillText(
              effect.impactChars[i],
              vpX + Math.cos(angle) * radius,
              vpY + Math.sin(angle) * radius,
            )
          }
          ctx.shadowBlur = 0
        }

        // Second beat echo: t 0.18 → 0.33 (softer, offset rotation)
        const b2 = Math.max(0, Math.min(1, (t - 0.18) / 0.15))
        if (b2 > 0) {
          const pulse  = Math.sin(b2 * Math.PI)
          const radius = 9 * pulse
          const fs     = 7 + 3 * pulse
          ctx.font = `${fs}px monospace`
          for (let i = 0; i < IMPACT_COUNT; i++) {
            const angle = (i / IMPACT_COUNT) * Math.PI * 2 + (Math.PI / IMPACT_COUNT)
            const alpha = 0.55 * pulse
            ctx.fillStyle = `rgba(${rgb},${alpha.toFixed(3)})`
            ctx.fillText(
              effect.impactChars[i],
              vpX + Math.cos(angle) * radius,
              vpY + Math.sin(angle) * radius,
            )
          }
        }

        // ── 2. Expanding symbol rings ─────────────────────────
        // Count grows with radius so density stays constant — no gaps
        for (let ri = 0; ri < RING_DEFS.length; ri++) {
          const ring = RING_DEFS[ri]
          if (t < ring.delay) continue

          const rt     = (t - ring.delay) / (1 - ring.delay)
          const eased  = 1 - Math.pow(1 - rt, 2.0)   // softer ease-out → slower feel
          const radius = ring.maxR * eased
          const alpha  = Math.pow(1 - rt, ring.fadePow) * 0.70

          if (alpha < 0.005 || radius < 2) continue

          const chars  = effect.ringChars[ri]
          const angles = effect.ringAngles[ri]
          // Dynamic count — grows with radius so density stays constant
          const count  = Math.min(RING_MAX_COUNT, Math.max(4, Math.floor(2 * Math.PI * radius / ring.arcSpacing)))
          const fs     = Math.max(7, 12 - rt * 4)

          ctx.font       = `${fs}px monospace`
          ctx.shadowBlur = 8

          for (let i = 0; i < count; i++) {
            // angles[i] is fixed — symbol i never moves as count grows, no spin
            ctx.fillStyle   = `rgba(${rgb},${alpha.toFixed(3)})`
            ctx.shadowColor = `rgba(${rgb},${(alpha * 0.35).toFixed(3)})`
            ctx.fillText(
              chars[i % RING_POOL_SIZE],
              vpX + Math.cos(angles[i]) * radius,
              vpY + Math.sin(angles[i]) * radius,
            )
          }
          ctx.shadowBlur = 0
        }

        // ── 3. Radial burst particles (scroll-corrected) ─────
        for (const p of effect.particles) {
          p.life += p.speed
          p.x    += p.vx
          p.y    += p.vy
          p.vx   *= p.friction
          p.vy   *= p.friction

          if (p.life >= 1) continue

          const drift   = Math.hypot(p.x - p.spawnX, p.y - p.spawnY)
          const spatial = Math.max(0, 1 - drift / p.maxDrift)
          const alpha   = 0.72 * spatial * Math.sin(Math.PI * p.life)
          if (alpha < 0.005) continue

          ctx.font        = `${p.fontSize}px monospace`
          ctx.fillStyle   = `rgba(${rgb},${alpha.toFixed(3)})`
          ctx.shadowBlur  = 12
          ctx.shadowColor = `rgba(${rgb},${(alpha * 0.4).toFixed(3)})`
          ctx.fillText(p.char, p.x - offX, p.y - offY)
          ctx.shadowBlur  = 0
        }
      }

      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click',     onClick)
      window.removeEventListener('resize',    resize)
      canvas.remove()
    }
  }, [])

  return null
}
