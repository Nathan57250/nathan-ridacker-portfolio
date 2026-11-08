import { useCallback, useEffect, useRef, useState } from 'react'

interface ScreenshotCarouselProps {
  images: string[]
  altPrefix: string
  prevLabel: string
  nextLabel: string
}

export default function ScreenshotCarousel({ images, altPrefix, prevLabel, nextLabel }: ScreenshotCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const update = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 1)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    if (el.firstElementChild) observer.observe(el.firstElementChild)
    el.addEventListener('scroll', update, { passive: true })
    return () => {
      observer.disconnect()
      el.removeEventListener('scroll', update)
    }
  }, [update])

  const scroll = (direction: 1 | -1) => {
    const el = viewportRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8 })
  }

  const overflowing = canPrev || canNext

  return (
    <div>
      <div ref={viewportRef} className="carousel-viewport">
        <div className="carousel-track">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              loading="lazy"
              onLoad={update}
              className="carousel-item"
              style={{ height: 'auto', border: '1px solid var(--color-border)' }}
            />
          ))}
        </div>
      </div>
      {overflowing && (
        <div className="carousel-controls">
          <button type="button" className="carousel-btn" onClick={() => scroll(-1)} disabled={!canPrev} aria-label={prevLabel}>←</button>
          <button type="button" className="carousel-btn" onClick={() => scroll(1)} disabled={!canNext} aria-label={nextLabel}>→</button>
        </div>
      )}
    </div>
  )
}
