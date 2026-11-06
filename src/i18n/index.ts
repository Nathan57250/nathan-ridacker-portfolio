import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'

const SUPPORTED = ['fr', 'en'] as const

function detectLanguage(): string {
  let saved: string | null = null
  // Throws when storage is blocked (privacy settings, some in-app browsers)
  try { saved = localStorage.getItem('lang') } catch { /* fall back to browser language */ }
  if (saved && (SUPPORTED as readonly string[]).includes(saved)) return saved
  const browser = navigator.languages
    .map(l => l.slice(0, 2).toLowerCase())
    .find(l => (SUPPORTED as readonly string[]).includes(l))
  return browser ?? 'en'
}

i18n.on('languageChanged', lng => document.documentElement.setAttribute('lang', lng))

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, fr: { translation: fr } },
  lng: detectLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
