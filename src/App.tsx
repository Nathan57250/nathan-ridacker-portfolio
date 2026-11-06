import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Process from './components/sections/Process'
import Services from './components/sections/Services'
import Skills from './components/sections/Skills'
import Testimonials from './components/sections/Testimonials'
import Navbar from './components/layout/Navbar'
import LegalNotice from './components/pages/LegalNotice'
import KarateCase from './components/pages/KarateCase'
import { ThemeProvider } from './hooks/useTheme'
import { useTranslation } from 'react-i18next'
import type { ComponentType } from 'react'

const PAGES: Record<string, ComponentType> = {
  '/mentions-legales': LegalNotice,
  '/projets/karate': KarateCase,
}

const Page = PAGES[window.location.pathname.replace(/\/$/, '')]

export default function App() {
  const { t } = useTranslation()
  const footerText = { fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em' }

  return (
    <ThemeProvider>
      <Navbar />
      <main style={{ width: '100%' }}>
        {Page ? <Page /> : (
          <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Skills />
            <Process />
            <Contact />
          </>
        )}
      </main>
      <footer className="site-footer" style={{ borderTop: '1px solid var(--color-border)' }}>
        <span style={footerText}>
          © {new Date().getFullYear()} NATHAN RIDACKER
        </span>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/mentions-legales" style={{ ...footerText, textDecoration: 'none' }}>
            {t('legal.title').toUpperCase()}
          </a>
          <span style={footerText}>BUILT WITH REACT</span>
        </div>
      </footer>
    </ThemeProvider>
  )
}
