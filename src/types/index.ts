export interface Project {
  key: string
  title: string
  description: string
  tags: string[]
  wip?: boolean
  github?: string
  demo?: string
  image?: string
}

export interface Skill {
  name: string
  level: 'expert' | 'advanced' | 'intermediate'
}

export type Lang = 'fr' | 'en'
