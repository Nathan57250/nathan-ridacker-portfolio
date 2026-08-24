import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { useTheme } from '../../hooks/useTheme'

export default function Navbar() {
  const { i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const lang = i18n.language as 'fr' | 'en'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: lang === 'fr' ? 'À propos' : 'About' },
    { href: '#projects', label: lang === 'fr' ? 'Projets' : 'Projects' },
    { href: '#skills', label: 'Stack' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        height: '64px',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        background: scrolled ? 'var(--color-nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <a href="#hero" style={{ fontFamily: 'DM Mono, monospace', fontSize: '13px', color: 'var(--color-text)', letterSpacing: '0.05em', textDecoration: 'none' }}>
        NR<span style={{ color: 'var(--color-accent)' }}>_</span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'var(--color-muted-2)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted-2)')}
          >
            {label}
          </a>
        ))}

        {/* Theme toggle */}
        <button
          onClick={toggle}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          style={{
            width: '36px',
            height: '20px',
            borderRadius: '10px',
            border: '1px solid var(--color-border)',
            background: theme === 'dark' ? 'var(--color-surface)' : 'var(--color-accent)',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background 0.3s, border-color 0.3s',
            flexShrink: 0,
          }}
        >
          <motion.span
            animate={{ x: theme === 'dark' ? 2 : 16 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            style={{
              position: 'absolute',
              top: '2px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: theme === 'dark' ? 'var(--color-muted-2)' : 'var(--color-bg)',
              display: 'block',
            }}
          />
        </button>

        {/* Lang toggle */}
        <button
          onClick={() => i18n.changeLanguage(lang === 'fr' ? 'en' : 'fr')}
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '11px',
            color: 'var(--color-bg)',
            background: 'var(--color-accent)',
            border: 'none',
            padding: '6px 12px',
            cursor: 'pointer',
            letterSpacing: '0.06em',
            fontWeight: 500,
          }}
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>
    </motion.nav>
  )
}
