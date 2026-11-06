import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

interface LegalSection {
  title: string
  lines: string[]
}

export default function LegalNotice() {
  const { t } = useTranslation()
  const sections = t('legal.sections', { returnObjects: true }) as LegalSection[]

  useEffect(() => {
    document.title = `${t('legal.title')} — Nathan Ridacker`
  }, [t])

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
          {t('legal.title')}
          <span style={{ color: 'var(--color-accent)' }}>.</span>
        </h1>

        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', marginBottom: '64px' }}>
          {t('legal.updated').toUpperCase()}
        </p>

        <div style={{ maxWidth: '720px' }}>
          {sections.map(section => (
            <div key={section.title} style={{ padding: '32px 0', borderTop: '1px solid var(--color-border)' }}>
              <h2 style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', fontWeight: 500, color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '16px' }}>
                {section.title.toUpperCase()}
              </h2>
              {section.lines.map(line => (
                <p key={line} style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-muted-2)', marginBottom: '8px' }}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
