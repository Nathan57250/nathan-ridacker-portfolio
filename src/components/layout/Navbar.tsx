import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export default function Navbar() {
  const { i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lang = i18n.language as 'fr' | 'en'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const solid = scrolled || menuOpen

  const links = [
    { href: '/#about', label: lang === 'fr' ? 'À propos' : 'About' },
    { href: '/#projects', label: lang === 'fr' ? 'Projets' : 'Projects' },
    { href: '/#skills', label: 'Stack' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="nav"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        borderBottom: solid ? '1px solid var(--color-border)' : '1px solid transparent',
        background: solid ? 'var(--color-nav-bg)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <a href="/#hero" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'DM Mono, monospace', fontSize: '13px', color: 'var(--color-text)', letterSpacing: '0.05em', textDecoration: 'none' }}>
        NR<span style={{ color: 'var(--color-accent)' }}>_</span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="nav-links">
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
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            background: 'transparent',
            color: 'var(--color-muted-2)',
            cursor: 'pointer',
            transition: 'color 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted-2)')}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex' }}
            >
              {theme === 'dark' ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
            </motion.span>
          </AnimatePresence>
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

        <button
          className="nav-burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu') : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          style={{
            width: '32px',
            height: '32px',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            background: 'transparent',
            color: 'var(--color-text)',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '64px',
              left: 0,
              right: 0,
              flexDirection: 'column',
              background: 'var(--color-bg)',
              borderBottom: '1px solid var(--color-border)',
              padding: '8px 24px 16px',
            }}
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'DM Mono, monospace', fontSize: '14px', color: 'var(--color-text)', textDecoration: 'none', letterSpacing: '0.04em', padding: '14px 0', borderBottom: '1px solid var(--color-border)' }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
