const WHATSAPP_PHONE = '8801743742098'

export function buildWhatsAppUrl({ name = '', contact = '', service = '', message = '' } = {}) {
  const lines = [
    'Hello Basic IT, I would like to discuss a project.',
    name.trim() && `Name: ${name.trim()}`,
    contact.trim() && `Contact: ${contact.trim()}`,
    service.trim() && `Service: ${service.trim()}`,
    message.trim() && `Details: ${message.trim()}`,
  ].filter(Boolean)

  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
}
