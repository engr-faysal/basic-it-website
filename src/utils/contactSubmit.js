import { contactEmail } from '../data/siteData'
import { buildWhatsAppUrl } from './whatsapp'

export function submitContactInquiry({ name, contact, service, message, preferred }) {
  const payload = { name, contact, service, message }

  if (preferred === 'whatsapp') {
    const url = buildWhatsAppUrl(payload)
    window.open(url, '_blank', 'noopener,noreferrer')
    return 'whatsapp'
  }

  if (preferred === 'email') {
    const subject = encodeURIComponent(`Basic IT inquiry — ${service || 'General'}`)
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Contact: ${contact}`,
        `Service: ${service}`,
        '',
        message,
      ].join('\n')
    )
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    return 'email'
  }

  if (preferred === 'facebook') {
    window.open('https://www.facebook.com/basicitsoft', '_blank', 'noopener,noreferrer')
    return 'facebook'
  }

  return 'form'
}
