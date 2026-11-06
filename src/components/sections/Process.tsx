import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

interface ProcessStep {
  title: string
  description: string
}

export default function Process() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as ProcessStep[]

  return (
    <section id="process" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <Container>
        <div style={{ padding: '80px 0' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>{t('process.section_label').toUpperCase()}</span>
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'var(--color-text)',
            marginBottom: '56px',
          }}>
            {t('process.title')}
          </h2>

          <ol className="process-grid">
            {steps.map((step, i) => (
              <m.li
                key={step.title}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-accent)', letterSpacing: '0.08em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  lineHeight: 1.25,
                  margin: '12px 0 10px',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--color-muted-2)' }}>
                  {step.description}
                </p>
              </m.li>
            ))}
          </ol>

        </div>
      </Container>
    </section>
  )
}
