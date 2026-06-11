import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  sanitizeInput,
  validateContactForm,
  type ContactApiResponse,
  type ContactFormData,
} from '@/lib/contact'

const TO_EMAIL = 'aethos.solutions@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Aethos Solutions <onboarding@resend.dev>'

export async function POST(request: Request): Promise<NextResponse<ContactApiResponse>> {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 })
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const raw = body as Record<string, unknown>
  const data: ContactFormData = {
    name: sanitizeInput(raw.name),
    email: sanitizeInput(raw.email),
    company: sanitizeInput(raw.company),
    service: sanitizeInput(raw.service),
    message: sanitizeInput(raw.message),
  }

  const fields = validateContactForm(data)
  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { success: false, error: 'Please check the highlighted fields.', fields },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('Contact form error: RESEND_API_KEY is not configured.')
    return NextResponse.json(
      { success: false, error: 'The contact form is not configured yet. Please email us directly.' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New Contact Request – Aethos · ${data.service}`,
      text: buildEmailText(data),
      html: buildEmailHtml(data),
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { success: false, error: 'We could not send your message. Please try again later.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Unexpected error sending contact email:', err)
    return NextResponse.json(
      { success: false, error: 'We could not send your message. Please try again later.' },
      { status: 500 }
    )
  }
}

function buildEmailText(data: ContactFormData): string {
  return [
    'New Contact Request – Aethos',
    '',
    'Name:',
    data.name,
    '',
    'Email:',
    data.email,
    '',
    'Company:',
    data.company || 'Not provided',
    '',
    'Service:',
    data.service,
    '',
    'Message:',
    data.message,
  ].join('\n')
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildEmailHtml(data: ContactFormData): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:0 0 4px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;">${escapeHtml(label)}</td>
    </tr>
    <tr>
      <td style="padding:0 0 20px;font-size:15px;line-height:1.5;color:#0f172a;white-space:pre-wrap;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;">${escapeHtml(value)}</td>
    </tr>`

  return `<div style="background:#f1f5f9;padding:32px 16px;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
    <div style="background:#020617;padding:24px 32px;">
      <p style="margin:0;color:#60a5fa;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;">Aethos Solutions</p>
      <h1 style="margin:6px 0 0;color:#f8fafc;font-size:20px;font-weight:600;">New Contact Request</h1>
    </div>
    <table role="presentation" width="100%" style="padding:24px 32px;border-collapse:collapse;">
      ${row('Name', data.name)}
      ${row('Email', data.email)}
      ${row('Company', data.company || 'Not provided')}
      ${row('Service', data.service)}
      ${row('Message', data.message)}
    </table>
  </div>
</div>`
}
