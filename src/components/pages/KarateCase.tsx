import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

// Drop screenshots in this folder; they are picked up automatically, sorted by filename
const SCREENSHOTS = Object.entries(
  import.meta.glob<string>('../../assets/projects/karate/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

interface Feature {
  title: string
  description: string
}

const sectionLabel = { fontFamily: 'DM Mono, monospace', fontSize: '12px', fontWeight: 500, color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '20px' }
const bodyText = { fontSize: '16px', lineHeight: 1.8, color: 'var(--color-muted-2)', maxWidth: '680px' }

export default function KarateCase() {
  const { t } = useTranslation()
  const features = t('karate_case.features', { returnObjects: true }) as Feature[]
  const tags = t('projects.items.karate.tags', { returnObjects: true }) as string[]

  useEffect(() => {
    document.title = `${t('projects.items.karate.title')} — Nathan Ridacker`
  }, [t])

  return (
    <article style={{ padding: '144px 0 96px' }}>
      <Container>
        <a href="/#projects" style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-muted-2)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          ← {t('karate_case.back')}
        </a>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--color-text)',
          margin: '32px 0 24px',
        }}>
          {t('projects.items.karate.title')}
          <span style={{ color: 'var(--color-accent)' }}>.</span>
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '64px' }}>
          {tags.map(tag => (
            <span key={tag} style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', padding: '5px 12px', border: '1px solid var(--color-border)', color: 'var(--color-muted-2)', letterSpacing: '0.04em' }}>
              {tag}
            </span>
          ))}
        </div>

        <section style={{ padding: '40px 0', borderTop: '1px solid var(--color-border)' }}>
          <h2 style={sectionLabel}>{t('karate_case.need_label').toUpperCase()}</h2>
          <p style={bodyText}>{t('karate_case.need')}</p>
        </section>

        <section style={{ padding: '40px 0', borderTop: '1px solid var(--color-border)' }}>
          <h2 style={sectionLabel}>{t('karate_case.solution_label').toUpperCase()}</h2>
          <p style={{ ...bodyText, marginBottom: '32px' }}>{t('karate_case.solution')}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {features.map((feature, i) => (
              <div key={feature.title} style={{ padding: '24px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-accent)', letterSpacing: '0.08em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: 'var(--color-text)', margin: '12px 0 8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--color-muted-2)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {(SCREENSHOTS.length > 0 || import.meta.env.DEV) && (
          <section style={{ padding: '40px 0', borderTop: '1px solid var(--color-border)' }}>
            <h2 style={sectionLabel}>{t('karate_case.screenshots_label').toUpperCase()}</h2>
            {SCREENSHOTS.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {SCREENSHOTS.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${t('karate_case.screenshot_alt')} ${i + 1}`}
                    loading="lazy"
                    style={{ display: 'block', width: '100%', height: 'auto', border: '1px solid var(--color-border)' }}
                  />
                ))}
              </div>
            ) : (
              <div style={{ padding: '48px 24px', border: '1px dashed var(--color-accent)', textAlign: 'center', fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-accent)', letterSpacing: '0.04em', lineHeight: 1.8 }}>
                PLACEHOLDER — src/assets/projects/karate/01-*.png, 02-*.png…
              </div>
            )}
          </section>
        )}

        <section style={{ padding: '40px 0 0', borderTop: '1px solid var(--color-border)' }}>
          <p style={{ ...bodyText, marginBottom: '24px' }}>{t('karate_case.cta_text')}</p>
          <a
            href="/#contact"
            style={{
              display: 'inline-block',
              fontFamily: 'DM Mono, monospace',
              fontSize: '13px',
              padding: '14px 28px',
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
          >
            {t('hero.cta_contact')} →
          </a>
        </section>
      </Container>
    </article>
  )
}
