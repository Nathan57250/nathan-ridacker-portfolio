import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

interface ServiceItem {
  title: string
  description: string
}

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as ServiceItem[]

  return (
    <section id="services" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <Container>
        <div style={{ padding: '80px 0' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>{t('services.section_label').toUpperCase()}</span>
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'var(--color-text)',
            marginBottom: '48px',
          }}>
            {t('services.title')}
          </h2>

          <div className="services-grid">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ padding: '32px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-accent)', letterSpacing: '0.08em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.01em',
                  margin: '16px 0 12px',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--color-muted-2)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
