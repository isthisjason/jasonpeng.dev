import { useEffect } from 'react'

interface Particle {
  x: number
  y: number
  char: string
  size: number
  vx: number
  vy: number
  life: number   // 0 → 1
  speed: number  // life increment per frame
}

const CHARS    = '01{}[]<>/\\|·*+-~;:,.'
const MAX_ALPHA      = 0.22
const SPAWN_DISTANCE = 28   // px of travel before spawning
const MAX_PARTICLES  = 120

export function CursorRipple() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = document.createElement('canvas')
    canvas.style.cssText =
      'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:1'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')!
    ctx.textAlign    = 'center'
    ctx.textBaseline = 'middle'

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const particles: Particle[] = []
    let lastX = -9999
    let lastY = -9999

    function onMouseMove(e: MouseEvent) {
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      if (dx * dx + dy * dy < SPAWN_DISTANCE * SPAWN_DISTANCE) return
      lastX = e.clientX
      lastY = e.clientY

      for (let i = 0; i < 3; i++) {
        particles.push({
          x:     e.clientX + (Math.random() - 0.5) * 22,
          y:     e.clientY + (Math.random() - 0.5) * 22,
          char:  CHARS[Math.floor(Math.random() * CHARS.length)],
          size:  11 + Math.random() * 3,
          vx:    (Math.random() - 0.5) * 0.5,
          vy:    -(0.4 + Math.random() * 0.7),
          life:  0,
          speed: 0.008 + Math.random() * 0.004,  // ~100–125 frames to die
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

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life += p.speed
        p.x    += p.vx
        p.y    += p.vy

        if (p.life >= 1) { particles.splice(i, 1); continue }

        // Ease-in-quad fade: slow to appear, drops off toward end
        const t     = 1 - p.life
        const alpha = MAX_ALPHA * t * t

        ctx.font      = `${p.size}px monospace`
        ctx.fillStyle = `rgba(96,165,250,${alpha.toFixed(3)})`
        ctx.fillText(p.char, p.x, p.y)
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
