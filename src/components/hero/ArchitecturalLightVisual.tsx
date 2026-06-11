'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { EASE_OUT } from '@/lib/motion'

/**
 * Abstract architectural corner — a vertical blue light seam where two dark
 * walls meet, spilling across a floor plane. Pure CSS gradients + clip-paths;
 * geometry lives in globals.css (.hp-*) on a 0–100% coordinate system with
 * the corner point at (60%, 58%).
 */
export default function ArchitecturalLightVisual() {
  const reduceMotion = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 36, damping: 22 })
  const sy = useSpring(my, { stiffness: 36, damping: 22 })
  const driftX = useTransform(sx, [-1, 1], [10, -10])
  const driftY = useTransform(sy, [-1, 1], [6, -6])

  useEffect(() => {
    if (reduceMotion) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1)
      my.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduceMotion, mx, my])

  return (
    <motion.div
      className="hero-portal"
      aria-hidden
      initial={reduceMotion ? false : { opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.25, ease: EASE_OUT }}
    >
      {/* Dark wall planes, faintly lit toward the seam */}
      <div className="hp-wall-left" />
      <div className="hp-wall-right" />

      {/* Floor plane catching the spill */}
      <div className="hp-floor" />

      {/* Soft glows — drift subtly with the cursor */}
      <motion.div className="hp-drift" style={{ x: driftX, y: driftY }}>
        <div className="hp-seam-glow" />
        <div className="hp-corner-glow" />
      </motion.div>

      {/* The light seam itself */}
      <div className="hp-seam" />

      {/* Thin technical edge lines */}
      <svg className="hp-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="60" y1="58" x2="0" y2="92" stroke="rgba(96,165,250,0.28)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="60" y1="58" x2="100" y2="86" stroke="rgba(96,165,250,0.22)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="60" y1="58" x2="14" y2="100" stroke="rgba(96,165,250,0.10)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="60" y1="58" x2="86" y2="100" stroke="rgba(96,165,250,0.10)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Faint grid concentrated around the opening */}
      <div className="hp-grid" />

      {/* A few drifting motes near the seam */}
      <span className="hp-dot animate-float-a" style={{ left: '56%', top: '34%' }} />
      <span className="hp-dot animate-float-b" style={{ left: '65%', top: '48%', animationDelay: '1.2s' }} />
      <span className="hp-dot animate-float-a" style={{ left: '52%', top: '66%', animationDelay: '2.1s' }} />

      {/* Fade into the page background so text stays readable */}
      <div className="hp-fade" />
    </motion.div>
  )
}
