import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Navbar from './components/layout/Navbar'
import { ThemeProvider } from './hooks/useTheme'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main style={{ width: '100%' }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{ borderTop: '1px solid var(--color-border)', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>
          © {new Date().getFullYear()} NATHAN RIDACKER
        </span>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>
          BUILT WITH REACT
        </span>
      </footer>
    </ThemeProvider>
  )
}
