import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

export default function NotFound() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = `${t('not_found.title')} — Nathan Ridacker`
  }, [t])

  return (
    <section style={{ padding: '144px 0 96px', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '24px' }}>
          ERROR 404
        </p>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--color-text)',
          margin: '0 0 24px',
        }}>
          {t('not_found.title')}
          <span style={{ color: 'var(--color-accent)' }}>.</span>
        </h1>

        <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-muted-2)', maxWidth: '520px', marginBottom: '48px' }}>
          {t('not_found.text')}
        </p>

        <a href="/" style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-muted-2)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          ← {t('legal.back')}
        </a>
      </Container>
    </section>
  )
}
