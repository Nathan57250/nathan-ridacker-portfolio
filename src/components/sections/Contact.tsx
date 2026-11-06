import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact">
      <Container>
        <div style={{ padding: '80px 0 120px' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '80px' }}>
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
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
                <GithubIcon />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nathan-ridacker/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
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
                <LinkedinIcon />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
