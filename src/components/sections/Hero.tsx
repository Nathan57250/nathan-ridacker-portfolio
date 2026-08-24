import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 40px 80px', overflow: 'hidden', width: '100%' }}>

      {/* Big background number */}
      <div style={{
        position: 'absolute', top: '50%', right: '-20px',
        transform: 'translateY(-50%)',
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(200px, 30vw, 420px)',
        fontWeight: 900,
        color: 'transparent',
        WebkitTextStroke: '1px var(--color-border)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.04em',
      }}>
        NR
      </div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '48px' }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block', boxShadow: '0 0 10px var(--color-accent)' }} />
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-muted-2)', letterSpacing: '0.08em' }}>
          {t('hero.available')}
        </span>
      </motion.div>

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(52px, 8vw, 120px)',
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: 'var(--color-text)',
          maxWidth: '900px',
          marginBottom: '32px',
        }}
      >
        {t('hero.name')}
        <span style={{ color: 'var(--color-accent)' }}>.</span>
      </motion.h1>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}
      >
        <div>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '14px', color: 'var(--color-accent)', marginBottom: '8px', letterSpacing: '0.04em' }}>
            {t('hero.title')}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--color-muted-2)', maxWidth: '420px', lineHeight: 1.6 }}>
            {t('hero.subtitle')}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href="#projects"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '13px',
              padding: '14px 28px',
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
            {t('hero.cta_projects')} →
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '13px',
              padding: '14px 28px',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-muted-2)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
          >
            {t('hero.cta_contact')}
          </a>
        </div>
      </motion.div>

      {/* Bottom border */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'var(--color-border)' }} />
    </section>
  )
}
