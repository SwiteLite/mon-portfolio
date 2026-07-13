import styles from "./page.module.css"
import Tag from '../components/Tag/Tag'
import Image from 'next/image'

const technologies = ["C", "Flutter", "Java", "Node.js", "Python", "React"]

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.imageWrapper}>

        <Image
            src="/images/accueil/paul_andre.jpg"
            alt="Paul André"
            width={800}
            height={500}
            className={styles.image}
            preload={true}
          />
        </div>
   
        <h1 className={styles.heroTitle}>
          Bonjour, je suis <span className={styles.highlight}>Paul André</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Ingénieur Logiciel 
        </p>
        <p className={styles.heroDescription}>
          Je crée des produits logiciels de bout en bout. Mon profil est surtout orienté systèmes embarqués, mobile et backend, mais depuis je l'élargis aux applications web modernes.
        </p>

        <div className={styles.tagsContainer}>
          {technologies.map((tech, index) => (
              <Tag key={index}>{tech}</Tag>
          ))}
       </div>

        <div className={styles.heroButtons}>
          <a href="projets" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes projets
          </a>
          <a href="contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
          
        </div>
        <a
          href="/documents/cv-paul-andre-ingenieur-logiciel-2026-07-10.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cvLink}
        >
          Voir mon CV
        </a>
      </div>
     
    </div>
  )
}


