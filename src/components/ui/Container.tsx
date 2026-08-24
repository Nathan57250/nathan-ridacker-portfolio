import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: Props) {
  return (
    <div
      className={className}
      style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px', width: '100%' }}
    >
      {children}
    </div>
  )
}
