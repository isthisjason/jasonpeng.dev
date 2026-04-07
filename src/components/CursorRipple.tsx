import { useEffect } from 'react'

interface Particle {
  x: number
  y: number
  spawnX: number    // birth position — fade is distance from here, not cursor
  spawnY: number
  char: string
  fontSize: number
  vx: number
  vy: number
  perpX: number     // perpendicular to radial direction, for transverse ripple
  perpY: number
  waveAmp: number
  waveFreq: number
  wavePhase: number
  life: number
  speed: number
}

const SYMBOLS        = '\\;\'+-=|><{}!?,:~^%#@/'
const MAX_ALPHA      = 0.6
const SPAWN_DISTANCE = 10
const MAX_PARTICLES  = 200
const SPAWN_COUNT    = 1
const MAX_DRIFT      = 85     // px from spawn before fully faded
const DARK_RIPPLE_RGB = '96,165,250'   // #60a5fa
const LIGHT_RIPPLE_RGB = '30,64,175'   // #1e40af (darker for light mode)

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

    const particles: Particle[] = []
    let lastX = -9999
    let lastY = -9999

    const isLightTheme = () => {
      const root = document.documentElement
      return root.classList.contains('light') || root.dataset.theme === 'light'
    }

    function onMouseMove(e: MouseEvent) {
      const dx    = e.clientX - lastX
      const dy    = e.clientY - lastY
      const dist2 = dx * dx + dy * dy
      if (dist2 < SPAWN_DISTANCE * SPAWN_DISTANCE) return
      lastX = e.clientX
      lastY = e.clientY

      // Scale drift speed with cursor speed — sqrt keeps it feeling proportional
      const cursorSpeed  = Math.sqrt(dist2)
      const speedFactor  = Math.sqrt(cursorSpeed / SPAWN_DISTANCE)  // 1.0 at min, ~3+ when fast

      for (let i = 0; i < SPAWN_COUNT; i++) {
        // Radial outward in a random direction — like ripples from a disturbance
        const angle  = Math.random() * Math.PI * 2
        const radX   = Math.cos(angle)
        const radY   = Math.sin(angle)
        const drift  = (0.25 + Math.random() * 0.4) * speedFactor

        particles.push({
          x:         e.clientX,
          y:         e.clientY,
          spawnX:    e.clientX,
          spawnY:    e.clientY,
          char:      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
          fontSize:  9 + Math.random() * 8,
          vx:        radX * drift,
          vy:        radY * drift,
          perpX:     -radY,   // 90° from radial
          perpY:      radX,
          waveAmp:   5 + Math.random() * 8,
          waveFreq:  1.5 + Math.random() * 1.0,
          wavePhase: Math.random() * Math.PI * 2,
          life:      0,
          speed:     0.005 + Math.random() * 0.003,
        })
      }

      if (particles.length > MAX_PARTICLES) {
        particles.splice(0, particles.length - MAX_PARTICLES)
      }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    let rafId: number

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const now = Date.now() * 0.001

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life += p.speed
        p.x    += p.vx
        p.y    += p.vy
        p.vx   *= 0.98
        p.vy   *= 0.98

        if (p.life >= 1) { particles.splice(i, 1); continue }

        // Fade by distance traveled from birth point — cursor position irrelevant
        const drift   = Math.hypot(p.x - p.spawnX, p.y - p.spawnY)
        const spatial = Math.max(0, 1 - drift / MAX_DRIFT)
        const alpha   = MAX_ALPHA * spatial * Math.sin(Math.PI * p.life)

        if (alpha < 0.005) continue

        // Transverse ripple wave
        const envelope = Math.sin(Math.PI * p.life)
        const wave     = Math.sin(now * p.waveFreq + p.wavePhase) * p.waveAmp * envelope
        const drawX    = p.x + p.perpX * wave
        const drawY    = p.y + p.perpY * wave

        const rippleRgb = isLightTheme() ? LIGHT_RIPPLE_RGB : DARK_RIPPLE_RGB
        ctx.font        = `${p.fontSize}px monospace`
        ctx.fillStyle   = `rgba(${rippleRgb},${alpha.toFixed(3)})`
        ctx.shadowBlur  = 10
        ctx.shadowColor = `rgba(${rippleRgb},${(alpha * 0.35).toFixed(3)})`
        ctx.fillText(p.char, drawX, drawY)
        ctx.shadowBlur  = 0
      }

      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
      canvas.remove()
    }
  }, [])

  return null
}
