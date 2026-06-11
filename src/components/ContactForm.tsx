'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Status = 'idle' | 'submitting' | 'success'

export default function ContactForm({ locale }: { locale: string }) {
  const t = useTranslations('form')
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', business: '', email: '', message: '' })

  void locale

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 900))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center justify-center text-center p-12 rounded-2xl"
        style={{
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          minHeight: '440px',
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
          style={{ background: 'var(--blue-50)', color: '#2563EB' }}
        >
          <Check size={24} />
        </div>
        <h2 className="font-semibold text-xl mb-3" style={{ color: 'var(--fg)' }}>
          {t('successTitle')}
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)', maxWidth: '320px' }}>
          {t('successBody')}
        </p>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '11px 14px',
    fontSize: '14px',
    color: 'var(--fg)',
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border-strong)',
    borderRadius: '10px',
    outline: 'none',
    transition: 'border-color 160ms',
    fontFamily: 'inherit',
  }

  const focusBlue = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#2563EB'
  }
  const blurBlue  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--border-strong)'
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-2xl flex flex-col gap-4"
      style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
            {t('nameLabel')}
          </label>
          <input
            id="name" name="name" type="text" required
            placeholder={t('namePlaceholder')}
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={focusBlue}
            onBlur={blurBlue}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="business" className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
            {t('businessLabel')} <span style={{ color: 'var(--fg-3)' }}>{t('businessOptional')}</span>
          </label>
          <input
            id="business" name="business" type="text"
            placeholder={t('businessPlaceholder')}
            value={form.business}
            onChange={handleChange}
            style={inputStyle}
            onFocus={focusBlue}
            onBlur={blurBlue}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
          {t('emailLabel')}
        </label>
        <input
          id="email" name="email" type="email" required
          placeholder={t('emailPlaceholder')}
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
          onFocus={focusBlue}
          onBlur={blurBlue}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
          {t('messageLabel')}
        </label>
        <textarea
          id="message" name="message" required
          rows={5}
          placeholder={t('messagePlaceholder')}
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.5' }}
          onFocus={focusBlue}
          onBlur={blurBlue}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 w-full font-semibold py-3.5 rounded-xl text-sm text-white btn"
        style={{
          background: status === 'submitting' ? '#60A5FA' : '#2563EB',
          boxShadow: '0 4px 16px rgba(37,99,235,0.28)',
          cursor: status === 'submitting' ? 'wait' : 'pointer',
        }}
      >
        {status === 'submitting'
          ? t('submitting')
          : <>{t('submit')} <ArrowRight size={15} /></>
        }
      </button>

      <p className="text-xs text-center" style={{ color: 'var(--fg-3)' }}>
        {t('disclaimer')}
      </p>
    </form>
  )
}
