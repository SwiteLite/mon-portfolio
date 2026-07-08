'use client'

import { HiMenu, HiX } from 'react-icons/hi'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }
0
  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            Mon Portfolio
          </Link>
        </div>

        <div className={styles.burgerContainer}>
          {/* Bouton burger pour mobile */}
          <button
            className={styles.burger}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
          
          <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
            <li>
              <Link href="/" 
                className={pathname === '/' ? `${styles.link} ${styles.active}` : styles.link}
                onClick={closeMenu}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="/projets" 
                className={pathname === '/projets' ? `${styles.link} ${styles.active}` : styles.link}
                onClick={closeMenu}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link 
                href="/formations" 
                className={pathname === '/formations' ? `${styles.link} ${styles.active}` : styles.link}
                onClick={closeMenu}
              >
                Formations
              </Link>
            </li>
            <li>
              <Link 
                href="/a-propos" 
                className={pathname === '/a-propos' ? `${styles.link} ${styles.active}` : styles.link}
                onClick={closeMenu}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" 
              className={pathname === '/contact' ? `${styles.link} ${styles.active}` : styles.link}
              onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
    
      </div>
    </nav>
  )
}
