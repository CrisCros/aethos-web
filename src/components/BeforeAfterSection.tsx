'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE } from '@/lib/motion'
import { MessageCircle, Globe, Inbox, Search, Layout, AlertCircle, Clock, TrendingUp, Bot, Check, X } from 'lucide-react'

const BEFORE_ICONS = [Globe, MessageCircle, AlertCircle, AlertCircle, Clock]
const AFTER_ICONS  = [Layout, Inbox, Bot, TrendingUp, Search]

export default function BeforeAfterSection() {
  const t = useTranslations('home.transform')
  const [side, setSide] = useState<'before' | 'after'>('after')

  const beforeItems = t.raw('before') as string[]
  const afterItems  = t.raw('after') as string[]
  const items   = side === 'before' ? beforeItems : afterItems
  const icons   = side === 'before' ? BEFORE_ICONS : AFTER_ICONS

  return (
    <section style={{ padding: 'clamp(64px,10vw,128px) 0', background: 'var(--bg-subtle)' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        <motion.div
          className="text-center mx-auto mb-12"
          style={{ maxWidth: '720px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#6a3df5' }}>
            {t('eyebrow')}
          </span>
          <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', lineHeight: '1.1', color: 'var(--fg)' }}>
            {side === 'before' ? t('h2Without') : t('h2With')}
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.55' }}>{t('subtitle')}</p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="relative inline-flex p-1 rounded-full" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}>
            <div
              className="absolute top-1 bottom-1 rounded-full transition-all duration-[280ms]"
              style={{ width: 'calc(50% - 4px)', left: side === 'before' ? '4px' : 'calc(50%)', background: side === 'before' ? 'var(--fg)' : '#7c5cff', boxShadow: side === 'after' ? 'var(--shadow-glow)' : 'none' }}
            />
            {(['before', 'after'] as const).map((s) => (
              <button key={s} onClick={() => setSide(s)} className="relative z-10 px-8 py-2.5 text-sm font-medium rounded-full transition-colors duration-220" style={{ color: side === s ? '#fff' : 'var(--fg-2)' }}>
                {s === 'before' ? t('tabBefore') : t('tabAfter')}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="mx-auto flex flex-col gap-2.5" style={{ maxWidth: '720px' }}>
          <AnimatePresence mode="wait">
            <motion.div key={side} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: EASE }} className="flex flex-col gap-2.5">
              {items.map((label, i) => {
                const Icon = icons[i] ?? Globe
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
                    className={`flex items-center gap-3.5 px-5 py-4 rounded-2xl ${side === 'before' ? 'ba-before-item' : 'ba-after-item'}`}
                    style={{ border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={side === 'before' ? { background: 'var(--error-50)', color: 'var(--error-500)' } : { background: 'var(--violet-50)', color: '#6a3df5' }}>
                      <Icon size={17} />
                    </div>
                    <span className="flex-1 text-[15px]" style={{ color: 'var(--fg)' }}>{label}</span>
                    {side === 'before'
                      ? <X size={15} style={{ color: 'var(--error-500)', flexShrink: 0 }} />
                      : <Check size={15} style={{ color: 'var(--success-500)', flexShrink: 0 }} />}
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
