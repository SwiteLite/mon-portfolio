
import styles from './page.module.css'
import ContactForm from "@/components/ContactForm/ContactForm"

export default function Contact() {


  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className="title">Me Contacter</h1>
        <p className="description">
          Une question ? Un projet ? N&apos;hésitez pas à me contacter !
        </p>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h2>Coordonnées</h2>
            <div className={styles.infoItem}>
              <strong>Email :</strong>
              <a href="mailto:pa.andre.pro@gmail.com">pa.andre.pro@gmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <strong>LinkedIn :</strong>
              <a href="https://www.linkedin.com/in/paul-andre45/" target="_blank" rel="noopener noreferrer">
                Mon profil LinkedIn
              </a>
            </div>
            <div className={styles.infoItem}>
              <strong>GitHub :</strong>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                Mon profil GitHub
              </a>
            </div>
            <div className={styles.infoItem}>
             <strong>Mon CV :</strong>
              <a
                href="/documents/cv-paul-andre-ingenieur-logiciel-2026-07-10.pdf"
                download="CV_Paul_Andre.pdf"
                >
                Télécharger mon CV
              </a>
            </div>
          </div>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}
