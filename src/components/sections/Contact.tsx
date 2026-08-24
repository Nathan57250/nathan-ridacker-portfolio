import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact">
      <Container>
        <div style={{ padding: '80px 0 120px' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '80px' }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>04</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>{t('contact.section_label').toUpperCase()}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(48px, 7vw, 100px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: '16px',
            }}>
              {t('contact.title')}
              <span style={{ color: 'var(--color-accent)' }}>.</span>
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--color-muted-2)', marginBottom: '56px', maxWidth: '400px', lineHeight: 1.7 }}>
              {t('contact.subtitle')}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="mailto:nathanridacker@gmail.com"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '13px',
                  padding: '16px 32px',
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {t('contact.email_label')} →
              </a>

              <a
                href="https://github.com/Nathan57250"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '13px',
                  padding: '16px 32px',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-muted-2)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nathan-ridacker/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '13px',
                  padding: '16px 32px',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-muted-2)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
