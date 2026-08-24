import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

const SKILLS: Record<string, string[]> = {
  frontend: ['React', 'TypeScript', 'Svelte', 'SvelteKit', 'JavaScript ES2022+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Phaser 3', 'WebSockets', 'Canvas API'],
  mobile: ['React Native', 'Expo'],
  tools: ['Vite', 'Git', 'Figma', 'Node.js', 'REST APIs'],
}

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <Container>
        <div style={{ padding: '80px 0' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>03</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>{t('skills.section_label').toUpperCase()}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0' }}
          >
            {(Object.entries(SKILLS)).map(([cat, items], i) => (
              <div
                key={cat}
                style={{
                  padding: '0 40px 0 0',
                  borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
                  paddingLeft: i > 0 ? '40px' : '0',
                  paddingRight: i < 2 ? '40px' : '0',
                }}
              >
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '28px' }}>
                  {t(`skills.categories.${cat}`).toUpperCase()}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {items.map(skill => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '12px',
                        padding: '8px 14px',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-muted-2)',
                        letterSpacing: '0.02em',
                        transition: 'all 0.15s',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--color-accent)'
                        e.currentTarget.style.color = 'var(--color-accent)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--color-border)'
                        e.currentTarget.style.color = 'var(--color-muted-2)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
