import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Skills from './components/sections/Skills'
import Navbar from './components/layout/Navbar'
import LegalNotice from './components/pages/LegalNotice'
import { ThemeProvider } from './hooks/useTheme'
import { useTranslation } from 'react-i18next'

const isLegalPage = window.location.pathname.replace(/\/$/, '') === '/mentions-legales'

export default function App() {
  const { t } = useTranslation()
  const footerText = { fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em' }

  return (
    <ThemeProvider>
      <Navbar />
      <main style={{ width: '100%' }}>
        {isLegalPage ? <LegalNotice /> : (
          <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
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
