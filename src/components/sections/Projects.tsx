import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'

const PROJECTS = ['photographer', 'elderScrolls', 'karate', 'openspace'] as const

const PROJECT_LINKS: Partial<Record<(typeof PROJECTS)[number], string>> = {
  elderScrolls: 'https://elder-scrolls-lore.vercel.app',
}

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

function ElderScrollsPreview() {
  const eras = [
    { label: "Aube", color: '#eab308' },
    { label: "Méréth.", color: '#22c55e' },
    { label: "1ère Ère", color: '#f97316' },
    { label: "2ème Ère", color: '#a855f7' },
    { label: "3ème Ère", color: '#ef4444' },
    { label: "4ème Ère", color: '#3b82f6' },
  ]
  return (
    <div style={{
      width: '200px',
      height: '130px',
      background: '#09090b',
      border: '1px solid #27272a',
      overflow: 'hidden',
      flexShrink: 0,
      position: 'relative',
      padding: '10px 12px',
      boxSizing: 'border-box',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {/* Language toggle (top-right) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
        <div style={{ display: 'flex', gap: '2px', fontSize: '6px', color: '#71717a' }}>
          <span style={{
            padding: '1px 3px',
            background: '#0c4a6e',
            color: '#7dd3fc',
            borderRadius: '2px',
            fontWeight: 600,
          }}>FR</span>
          <span style={{ padding: '1px 3px' }}>EN</span>
          <span style={{ padding: '1px 3px' }}>ES</span>
        </div>
      </div>

      {/* Title */}
      <div style={{ fontSize: '12px', fontWeight: 800, color: '#fafafa', lineHeight: 1.1, marginBottom: '2px', textAlign: 'center' }}>
        Grand Livre du Lore
      </div>
      <div style={{ fontSize: '6.5px', color: '#a1a1aa', marginBottom: '8px', textAlign: 'center' }}>
        Encyclopédie du lore The Elder Scrolls
      </div>

      {/* Era grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }}>
        {eras.map(era => (
          <div key={era.label} style={{
            background: '#18181b',
            border: '1px solid #27272a',
            borderRadius: '2px',
            padding: '3px 4px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
          }}>
            <span style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: era.color,
              flexShrink: 0,
            }} />
            <span style={{ fontSize: '6.5px', color: '#fafafa', fontWeight: 500 }}>{era.label}</span>
          </div>
        ))}
      </div>

      {/* AI badge */}
      <div style={{
        position: 'absolute',
        bottom: '6px',
        right: '8px',
        fontFamily: 'DM Mono, monospace',
        fontSize: '6px',
        padding: '1px 4px',
        border: '1px solid #0c4a6e',
        color: '#7dd3fc',
        letterSpacing: '0.08em',
        borderRadius: '2px',
        background: '#09090b',
      }}>
        AI-BUILT
      </div>
    </div>
  )
}

const PREVIEWS = {
  photographer: PhotographerPreview,
  elderScrolls: ElderScrollsPreview,
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
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>{t('projects.section_label').toUpperCase()}</span>
          </div>

          <div>
            {PROJECTS.map((key, i) => {
              const item = t(`projects.items.${key}`, { returnObjects: true }) as {
                title: string; description: string; tags: string[]; wip?: boolean
              }
              const Preview = PREVIEWS[key]
              const link = PROJECT_LINKS[key]

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  {...(link ? {
                    onClick: () => window.open(link, '_blank', 'noopener,noreferrer'),
                  } : {})}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '32px',
                    alignItems: 'start',
                    padding: '40px 0',
                    borderTop: '1px solid var(--color-border)',
                    cursor: link ? 'pointer' : 'default',
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
