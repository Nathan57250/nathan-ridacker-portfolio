import { useEffect, useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

type Status = 'idle' | 'sending' | 'success' | 'error'

const label = { display: 'block', fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted-2)', letterSpacing: '0.1em', marginBottom: '10px' }

export default function ContactPage() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    document.title = `${t('contact_page.title')} — Nathan Ridacker`
  }, [t])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section style={{ padding: '144px 0 96px' }}>
      <Container>
        <a href="/" style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-muted-2)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          ← {t('legal.back')}
        </a>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--color-text)',
          margin: '32px 0 16px',
        }}>
          {t('contact_page.title')}
          <span style={{ color: 'var(--color-accent)' }}>.</span>
        </h1>

        <p style={{ fontSize: '15px', color: 'var(--color-muted-2)', marginBottom: '64px', maxWidth: '520px', lineHeight: 1.7 }}>
          {t('contact_page.subtitle')}
        </p>

        <form onSubmit={handleSubmit} style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className="form-row">
            <div>
              <label htmlFor="name" style={label}>{t('contact_page.name').toUpperCase()} *</label>
              <input id="name" name="name" className="form-field" required maxLength={100} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" style={label}>{t('contact_page.email').toUpperCase()} *</label>
              <input id="email" name="email" type="email" className="form-field" required maxLength={254} autoComplete="email" />
            </div>
          </div>

          <div>
            <label htmlFor="subject" style={label}>{t('contact_page.subject').toUpperCase()}</label>
            <input id="subject" name="subject" className="form-field" maxLength={150} />
          </div>

          <div>
            <label htmlFor="message" style={label}>{t('contact_page.message').toUpperCase()} *</label>
            <textarea id="message" name="message" className="form-field" required maxLength={5000} rows={8} style={{ resize: 'vertical' }} />
          </div>

          {/* Honeypot, hidden from humans and assistive tech */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
            <input name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6 }}>
            {t('contact_page.privacy')}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'sending'}
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '13px',
                padding: '16px 32px',
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                fontWeight: 500,
                letterSpacing: '0.04em',
                border: 'none',
                cursor: status === 'sending' ? 'wait' : 'pointer',
              }}
            >
              {t(status === 'sending' ? 'contact_page.sending' : 'contact_page.send')} →
            </button>

            <p role="status" aria-live="polite" style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', letterSpacing: '0.04em', color: status === 'error' ? '#ff6b6b' : 'var(--color-accent)' }}>
              {status === 'success' && t('contact_page.success')}
              {status === 'error' && (
                <>
                  {t('contact_page.error')}{' '}
                  <a href="mailto:nathanridacker@gmail.com" style={{ textDecoration: 'underline' }}>nathanridacker@gmail.com</a>
                </>
              )}
            </p>
          </div>
        </form>
      </Container>
    </section>
  )
}
