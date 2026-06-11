export interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>

export interface ContactApiSuccess {
  success: true
}

export interface ContactApiError {
  success: false
  error: string
  fields?: ContactFieldErrors
}

export type ContactApiResponse = ContactApiSuccess | ContactApiError

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_NAME_LENGTH = 100
const MAX_COMPANY_LENGTH = 100
const MAX_SERVICE_LENGTH = 100
const MAX_MESSAGE_LENGTH = 5000

export function sanitizeInput(value: unknown): string {
  if (typeof value !== 'string') return ''
  // Strip tags so submitted HTML can never reach the notification email.
  return value.replace(/<[^>]*>/g, '').trim()
}

export function validateContactForm(data: ContactFormData): ContactFieldErrors {
  const errors: ContactFieldErrors = {}

  if (!data.name) {
    errors.name = 'Please enter your name.'
  } else if (data.name.length > MAX_NAME_LENGTH) {
    errors.name = `Name must be ${MAX_NAME_LENGTH} characters or fewer.`
  }

  if (!data.email) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (data.company.length > MAX_COMPANY_LENGTH) {
    errors.company = `Company must be ${MAX_COMPANY_LENGTH} characters or fewer.`
  }

  if (!data.service) {
    errors.service = 'Please select a service.'
  } else if (data.service.length > MAX_SERVICE_LENGTH) {
    errors.service = `Service must be ${MAX_SERVICE_LENGTH} characters or fewer.`
  }

  if (!data.message) {
    errors.message = 'Please enter a message.'
  } else if (data.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`
  }

  return errors
}
