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

const SYMBOLS         = '\\;\'+-=|><{}!?,:~^%#@/*&$'
const MAX_ALPHA       = 0.3
const SPAWN_DISTANCE  = 32
const MAX_PARTICLES   = 80
const SPAWN_COUNT     = 1
const MAX_DRIFT       = 85
const DARK_RIPPLE_RGB  = '217,138,95'   // terracotta accent (dark theme)
const LIGHT_RIPPLE_RGB = '181,86,47'    // terracotta accent (light theme)

function randChar() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
}

export function CursorRipple() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = document.createElement('canvas')
    canvas.className = 'cursor-ripple-canvas'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')!

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const moveParticles: MoveParticle[] = []
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

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    let rafId: number

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const nowSec = Date.now() * 0.001
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
        ctx.fillText(p.char, drawX, drawY)
      }

      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize',    resize)
      canvas.remove()
    }
  }, [])

  return null
}
