import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

interface Testimonial {
  quote: string
  name: string
  role: string
  placeholder?: boolean
}

export default function Testimonials() {
  const { t } = useTranslation()
  const all = t('testimonials.items', { returnObjects: true }) as Testimonial[]
  // Fake testimonials must never reach production
  const items = import.meta.env.DEV ? all : all.filter(item => !item.placeholder)

  if (items.length === 0) return null

  return (
    <section id="testimonials" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <Container>
        <div style={{ padding: '80px 0' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>{t('testimonials.section_label').toUpperCase()}</span>
          </div>

          <div className="testimonials-grid">
            {items.map((item, i) => (
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ position: 'relative', padding: '32px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}
              >
                {item.placeholder && (
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '10px',
                    padding: '3px 8px',
                    border: '1px dashed var(--color-accent)',
                    color: 'var(--color-accent)',
                    letterSpacing: '0.08em',
                  }}>
                    PLACEHOLDER
                  </span>
                )}
                <span aria-hidden="true" style={{ fontFamily: 'Playfair Display, serif', fontSize: '64px', fontWeight: 900, lineHeight: 0.8, color: 'var(--color-accent)' }}>
                  “
                </span>
                <blockquote style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '19px',
                  lineHeight: 1.6,
                  color: 'var(--color-text)',
                  margin: '16px 0 28px',
                  flex: 1,
                }}>
                  {item.quote}
                </blockquote>
                <figcaption style={{ paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-text)', letterSpacing: '0.06em' }}>
                    {item.name.toUpperCase()}
                  </div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em', marginTop: '4px' }}>
                    {item.role}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
