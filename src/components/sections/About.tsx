import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'
import photo from '../../assets/nathan.jpg'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <Container>
        <div style={{ padding: '80px 0 80px', borderBottom: '1px solid var(--color-border)', marginBottom: '0' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>{t('about.section_label').toUpperCase()}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-grid"
          >
            {/* Photo */}
            <div className="about-photo">
              <img
                src={photo}
                alt={t('about.photo_alt')}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              />
            </div>

            {/* Text */}
            <div style={{ paddingTop: '8px' }}>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--color-text)',
                marginBottom: '32px',
              }}>
                {t('about.title')}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--color-muted-2)', marginBottom: '40px' }}>
                {t('about.body')}
              </p>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '40px', marginBottom: '40px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1 }}>
                    6<span style={{ color: 'var(--color-accent)' }}>+</span>
                  </div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', marginTop: '6px' }}>
                    {t('about.experience_label').toUpperCase()}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1 }}>
                    Web <span style={{ color: 'var(--color-accent)' }}>&amp;</span> Mobile
                  </div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', marginTop: '6px' }}>
                    {t('about.platforms_label').toUpperCase()}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ width: '32px', height: '1px', background: 'var(--color-accent)' }} />
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-accent)', letterSpacing: '0.06em' }}>{t('about.tagline')}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
