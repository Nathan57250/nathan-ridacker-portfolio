import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { User } from 'lucide-react'
import Container from '../ui/Container'

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
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
          >
            {/* Photo */}
            <div>
              {/* Replace inner content with <img src={photo} className="w-full h-full object-cover" alt={t('about.photo_alt')} /> */}
              <div style={{
                width: '100%',
                aspectRatio: '4/5',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                color: 'var(--color-muted)',
              }}>
                <User size={40} strokeWidth={1} />
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.08em' }}>PHOTO À VENIR</span>
              </div>
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1 }}>
                    6<span style={{ color: 'var(--color-accent)' }}>+</span>
                  </div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', marginTop: '6px' }}>
                    {t('about.experience_label').toUpperCase()}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1 }}>
                    3<span style={{ color: 'var(--color-accent)' }}>+</span>
                  </div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', marginTop: '6px' }}>
                    PROJETS PERSO
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ width: '32px', height: '1px', background: 'var(--color-accent)' }} />
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-accent)', letterSpacing: '0.06em' }}>FundsDLT · Luxembourg</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
