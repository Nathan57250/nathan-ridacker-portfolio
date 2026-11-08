import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const SITE_URL = 'https://nathan-ridacker-portfolio.vercel.app'

// Link previews (LinkedIn, WhatsApp…) don't run JS, so each sub-page gets its own static HTML with the right meta
const PAGES = [
  {
    path: '/projets/karate',
    title: 'Gestionnaire Club de Karaté — Nathan Ridacker',
    description: 'Étude de cas : application mobile pour un club de karaté. Membres, ceintures, calendrier des séances et événements avec rappels par notification.',
  },
  {
    path: '/contact',
    title: 'Contact — Nathan Ridacker',
    description: 'Contactez Nathan Ridacker, développeur front-end freelance : décrivez votre projet, réponse sous 48h avec une première estimation.',
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales — Nathan Ridacker',
    description: 'Mentions légales et données personnelles du site de Nathan Ridacker, développeur freelance au Luxembourg et en France.',
  },
]

function pageMeta(): Plugin {
  let outDir = 'dist'
  return {
    name: 'page-meta',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const html = readFileSync(join(outDir, 'index.html'), 'utf8')
      for (const { path, title, description } of PAGES) {
        const url = SITE_URL + path
        const page = html
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/(<meta (?:name|property)="(?:og|twitter):title" content=")[^"]*/g, `$1${title}`)
          .replace(/(<meta (?:name|property)="(?:(?:og|twitter):)?description" content=")[^"]*/g, `$1${description}`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
          .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
        mkdirSync(join(outDir, path), { recursive: true })
        writeFileSync(join(outDir, path, 'index.html'), page)
      }
      // Vercel serves 404.html (with a 404 status) for any unmatched path
      const notFound = html
        .replace(/<title>.*?<\/title>/, '<title>Page introuvable — Nathan Ridacker</title>\n    <meta name="robots" content="noindex" />')
        .replace(/\s*<link rel="canonical"[^>]*>/, '')
      writeFileSync(join(outDir, '404.html'), notFound)
    },
  }
}

export default defineConfig({
  plugins: [react(), pageMeta()],
})
