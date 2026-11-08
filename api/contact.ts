// Vercel Function — sends the contact form through Resend (env: RESEND_API_KEY, optional CONTACT_TO / CONTACT_FROM)

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/
const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 }

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })
}

function field(data: Record<string, unknown>, key: keyof typeof LIMITS) {
  const value = data[key]
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return json(500, { error: 'not_configured' })

  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return json(400, { error: 'invalid' })
  }

  // Honeypot: bots fill every field, humans never see this one
  if (typeof data.website === 'string' && data.website !== '') return json(200, { ok: true })

  const name = field(data, 'name')
  const email = field(data, 'email')
  const subject = field(data, 'subject')
  const message = field(data, 'message')

  const tooLong = (Object.keys(LIMITS) as (keyof typeof LIMITS)[]).some(k => field(data, k).length > LIMITS[k])
  // No line breaks in header-bound values (subject, reply-to)
  if (!name || !message || !EMAIL_RE.test(email) || tooLong || /[\r\n]/.test(name + subject)) {
    return json(400, { error: 'invalid' })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? 'Portfolio <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO ?? 'nathanridacker@gmail.com'],
      reply_to: email,
      subject: `[Portfolio] ${subject || `Message de ${name}`}`,
      text: `Nom : ${name}\nE-mail : ${email}\nSujet : ${subject || '—'}\n\n${message}`,
    }),
  })

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text())
    return json(502, { error: 'send_failed' })
  }
  return json(200, { ok: true })
}
