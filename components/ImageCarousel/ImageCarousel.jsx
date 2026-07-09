'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import styles from './ImageCarousel.module.css'
const INTERVAL_MS = 4500

function getOffset(index, current, total) {
  let diff = index - current
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

export default function ImageCarousel({ images, alt, width, height }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index) => {
    setCurrentIndex((index + images.length) % images.length)
  }, [images.length])

  const goNext = useCallback(() => {
    goTo(currentIndex + 1)
  }, [currentIndex, goTo])

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1)
  }, [currentIndex, goTo])

  useEffect(() => {
    if (images.length <= 1 || isPaused) return

    const interval = setInterval(goNext, INTERVAL_MS)
    return () => clearInterval(interval)
  }, [images.length, isPaused, goNext])

  if (images.length === 0) return null

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.viewport}>
        {images.length > 1 && (
          <button
            type="button"
            className={`${styles.nav} ${styles.navPrev}`}
            aria-label="Image précédente"
            onClick={goPrev}
          >
            <HiChevronLeft className={styles.navIcon} aria-hidden />
          </button>
        )}

        <div className={styles.stage}>
          {images.map((src, index) => {
            const offset = getOffset(index, currentIndex, images.length)
            const isVisible = Math.abs(offset) <= 1

            return (
              <button
                key={src}
                type="button"
                className={[
                  styles.slide,
                  offset === 0 && styles.active,
                  offset === -1 && styles.prev,
                  offset === 1 && styles.next,
                  !isVisible && styles.hidden,
                ].filter(Boolean).join(' ')}
                aria-label={`Afficher la capture ${index + 1}`}
                aria-current={offset === 0}
                onClick={() => goTo(index)}
                tabIndex={isVisible ? 0 : -1}
              >
                <div
                  className={styles.slideCard}
                  style={{ aspectRatio: `${width} / ${height}` }}
                >
                  <Image
                    src={src}
                    alt={`${alt} — capture ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 52vw, 38vw"
                    className={styles.image}
                    priority={index === 0}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {images.length > 1 && (
          <button
            type="button"
            className={`${styles.nav} ${styles.navNext}`}
            aria-label="Image suivante"
            onClick={goNext}
          >
            <HiChevronRight className={styles.navIcon} aria-hidden />
          </button>        )}
      </div>

      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              aria-label={`Aller à la capture ${index + 1}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
