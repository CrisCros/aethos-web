'use client'

import { useState } from 'react'
import { ArrowRight, Check, AlertCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { ContactApiResponse, ContactFieldErrors, ContactFormData } from '@/lib/contact'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY_FORM: ContactFormData = { name: '', company: '', email: '', service: '', message: '' }

export default function ContactForm({ locale }: { locale: string }) {
  const t = useTranslations('form')
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM)
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})
  const [errorMessage, setErrorMessage] = useState('')

  void locale

  const serviceOptions = t.raw('serviceOptions') as string[]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => (prev[name as keyof ContactFormData] ? { ...prev, [name]: undefined } : prev))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setFieldErrors({})
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = (await res.json()) as ContactApiResponse

      if (!data.success) {
        setFieldErrors(data.fields ?? {})
        setErrorMessage(data.error)
        setStatus('error')
        return
      }

      setForm(EMPTY_FORM)
      setStatus('success')
    } catch {
      setErrorMessage(t('errorBody'))
      setStatus('error')
    }
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
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'var(--border-strong)',
    borderRadius: '10px',
    outline: 'none',
    transition: 'border-color 160ms',
    fontFamily: 'inherit',
  }

  const errorInputStyle: React.CSSProperties = {
    borderColor: 'var(--error-500)',
  }

  const focusBlue = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!fieldErrors[e.currentTarget.name as keyof ContactFormData]) {
      e.currentTarget.style.borderColor = '#2563EB'
    }
  }
  const blurBlue = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!fieldErrors[e.currentTarget.name as keyof ContactFormData]) {
      e.currentTarget.style.borderColor = 'var(--border-strong)'
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
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
            style={fieldErrors.name ? { ...inputStyle, ...errorInputStyle } : inputStyle}
            onFocus={focusBlue}
            onBlur={blurBlue}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
          />
          {fieldErrors.name && (
            <p id="name-error" role="alert" className="text-xs" style={{ color: 'var(--error-500)' }}>
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
            {t('businessLabel')} <span style={{ color: 'var(--fg-3)' }}>{t('businessOptional')}</span>
          </label>
          <input
            id="company" name="company" type="text"
            placeholder={t('businessPlaceholder')}
            value={form.company}
            onChange={handleChange}
            style={fieldErrors.company ? { ...inputStyle, ...errorInputStyle } : inputStyle}
            onFocus={focusBlue}
            onBlur={blurBlue}
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={fieldErrors.company ? 'company-error' : undefined}
          />
          {fieldErrors.company && (
            <p id="company-error" role="alert" className="text-xs" style={{ color: 'var(--error-500)' }}>
              {fieldErrors.company}
            </p>
          )}
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
          style={fieldErrors.email ? { ...inputStyle, ...errorInputStyle } : inputStyle}
          onFocus={focusBlue}
          onBlur={blurBlue}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
        />
        {fieldErrors.email && (
          <p id="email-error" role="alert" className="text-xs" style={{ color: 'var(--error-500)' }}>
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
          {t('serviceLabel')}
        </label>
        <select
          id="service" name="service" required
          value={form.service}
          onChange={handleChange}
          style={{ ...(fieldErrors.service ? { ...inputStyle, ...errorInputStyle } : inputStyle), cursor: 'pointer' }}
          onFocus={focusBlue}
          onBlur={blurBlue}
          aria-invalid={Boolean(fieldErrors.service)}
          aria-describedby={fieldErrors.service ? 'service-error' : undefined}
        >
          <option value="" disabled>{t('servicePlaceholder')}</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {fieldErrors.service && (
          <p id="service-error" role="alert" className="text-xs" style={{ color: 'var(--error-500)' }}>
            {fieldErrors.service}
          </p>
        )}
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
          style={fieldErrors.message ? { ...inputStyle, ...errorInputStyle, resize: 'vertical', lineHeight: '1.5' } : { ...inputStyle, resize: 'vertical', lineHeight: '1.5' }}
          onFocus={focusBlue}
          onBlur={blurBlue}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? 'message-error' : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" role="alert" className="text-xs" style={{ color: 'var(--error-500)' }}>
            {fieldErrors.message}
          </p>
        )}
      </div>

      {status === 'error' && errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-2.5 p-3.5 rounded-xl text-sm"
          style={{ background: 'var(--error-50)', color: 'var(--error-500)', border: '1px solid var(--error-500)' }}
        >
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

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
