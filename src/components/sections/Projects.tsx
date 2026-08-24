import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

const PROJECTS = ['photographer', 'karate', 'openspace'] as const

function PhotographerPreview() {
  return (
    <div style={{
      width: '200px',
      height: '130px',
      background: '#f0ebe0',
      border: '1px solid #d8d0c0',
      overflow: 'hidden',
      flexShrink: 0,
      position: 'relative',
    }}>
      {/* Navbar mockup */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', borderBottom: '1px solid #d8d0c0' }}>
        <span style={{ fontFamily: 'serif', fontSize: '8px', fontWeight: 700, color: '#2a3220', letterSpacing: '0.05em' }}>FR · À TRAVERS LES FEUILLES</span>
        <div style={{ width: '40px', height: '10px', background: '#2a3220', borderRadius: '9px' }} />
      </div>
      {/* Hero mockup */}
      <div style={{ display: 'flex', padding: '8px 10px', gap: '8px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '6px', color: '#7a7060', letterSpacing: '0.1em', marginBottom: '4px' }}>DOUCEUR, LUMIÈRE, PRÉSENCE</div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '14px', fontWeight: 700, color: '#1a2410', lineHeight: 1.1, marginBottom: '4px' }}>Florian<br />Ridacker</div>
          <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '8px', color: '#4a5a30' }}>Silences Sauvages</div>
        </div>
        {/* Photo mockup */}
        <div style={{
          width: '72px',
          height: '80px',
          background: 'linear-gradient(135deg, #8a6a3a 0%, #5a4020 40%, #3a5020 100%)',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Lynx silhouette suggestion */}
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '40px', height: '50px', background: 'rgba(20,30,10,0.5)', borderRadius: '40% 40% 0 0' }} />
        </div>
      </div>
    </div>
  )
}

function KaratePreview() {
  return (
    <div style={{
      width: '200px',
      height: '130px',
      background: '#0f1117',
      border: '1px solid #282836',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      <div style={{ padding: '12px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '8px', color: '#e85d4a', letterSpacing: '0.08em' }}>KARATÉ CLUB</span>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1e2030', border: '1px solid #2e3050' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
          {['Membres', 'Présences', 'Ceintures', 'Événements'].map(label => (
            <div key={label} style={{ background: '#1a1a28', padding: '5px 7px', borderRadius: '4px' }}>
              <div style={{ fontSize: '6px', color: '#6060a0', marginBottom: '2px', fontFamily: 'monospace' }}>{label.toUpperCase()}</div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#eeeef5', fontFamily: 'monospace' }}>—</div>
            </div>
          ))}
        </div>
        <div style={{ height: '2px', background: 'linear-gradient(to right, #e85d4a, transparent)', borderRadius: '1px' }} />
      </div>
    </div>
  )
}

function OpenspacePreview() {
  const tiles = Array.from({ length: 6 * 4 })
  return (
    <div style={{
      width: '200px',
      height: '130px',
      background: '#1a2a1a',
      border: '1px solid #2a3a2a',
      overflow: 'hidden',
      flexShrink: 0,
      position: 'relative',
    }}>
      {/* Pixel grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', width: '100%', height: '100%', opacity: 0.6 }}>
        {tiles.map((_, i) => (
          <div key={i} style={{
            border: '0.5px solid #2a3a2a',
            background: i % 7 === 0 ? '#2d4a2d' : i % 11 === 0 ? '#1a3a1a' : '#1a2a1a',
          }} />
        ))}
      </div>
      {/* Avatar dots */}
      {[
        { x: '20%', y: '30%', color: '#c8ff47' },
        { x: '55%', y: '55%', color: '#ff8c47' },
        { x: '75%', y: '25%', color: '#47c8ff' },
      ].map((dot, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: dot.x,
          top: dot.y,
          width: '10px',
          height: '10px',
          background: dot.color,
          imageRendering: 'pixelated',
          boxShadow: `0 0 6px ${dot.color}`,
        }} />
      ))}
      {/* WIP label */}
      <div style={{
        position: 'absolute',
        bottom: '8px',
        right: '8px',
        fontFamily: 'monospace',
        fontSize: '9px',
        padding: '2px 6px',
        border: '1px solid #c8ff47',
        color: '#c8ff47',
        letterSpacing: '0.08em',
      }}>
        WIP
      </div>
    </div>
  )
}

const PREVIEWS = {
  photographer: PhotographerPreview,
  karate: KaratePreview,
  openspace: OpenspacePreview,
}

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <Container>
        <div style={{ padding: '80px 0' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>02</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>{t('projects.section_label').toUpperCase()}</span>
          </div>

          <div>
            {PROJECTS.map((key, i) => {
              const item = t(`projects.items.${key}`, { returnObjects: true }) as {
                title: string; description: string; tags: string[]; wip?: boolean
              }
              const Preview = PREVIEWS[key]

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto',
                    gap: '32px',
                    alignItems: 'start',
                    padding: '40px 0',
                    borderTop: '1px solid var(--color-border)',
                    cursor: 'default',
                    transition: 'background 0.2s, padding 0.2s, margin 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.background = 'var(--color-surface)'
                    el.style.padding = '40px 24px'
                    el.style.margin = '0 -24px'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.background = 'transparent'
                    el.style.padding = '40px 0'
                    el.style.margin = '0'
                  }}
                >
                  {/* Number */}
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', paddingTop: '4px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content + Preview */}
                  <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: 'clamp(24px, 2.5vw, 36px)',
                          fontWeight: 700,
                          color: 'var(--color-text)',
                          letterSpacing: '-0.02em',
                        }}>
                          {item.title}
                        </h3>
                        {item.wip && (
                          <span style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '10px',
                            padding: '4px 10px',
                            border: '1px solid var(--color-accent)',
                            color: 'var(--color-accent)',
                            letterSpacing: '0.08em',
                          }}>
                            WIP
                          </span>
                        )}
                      </div>

                      <p style={{ fontSize: '14px', color: 'var(--color-muted-2)', lineHeight: 1.7, maxWidth: '420px', marginBottom: '20px' }}>
                        {item.description}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {item.tags.map(tag => (
                          <span key={tag} style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '11px',
                            padding: '5px 12px',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-muted-2)',
                            letterSpacing: '0.04em',
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CSS Preview */}
                    <Preview />
                  </div>

                  {/* Arrow */}
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '20px', color: 'var(--color-muted)', paddingTop: '4px' }}>
                    →
                  </span>
                </motion.div>
              )
            })}

            <div style={{ borderTop: '1px solid var(--color-border)' }} />
          </div>

        </div>
      </Container>
    </section>
  )
}
