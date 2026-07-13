import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className="title">À propos de moi</h1>
        
        <div className={styles.content}>
          <div className={styles.bio}>
            <h2>Qui suis-je ?</h2>
            <p>
            Ingénieur logiciel avec 4 ans d&apos;expérience en startup. 
            Mon expertise n&apos;est pas liée à un seul langage ou à une seule technologie, 
            mais à la compréhension du besoin et à l&apos;architecture globale :
            du traitement du signal et de l&apos;embarqué aux applications mobiles et au backend. 
            Je transforme un besoin en produit, du prototype à la mise en production. 
            Aujourd&apos;hui j&apos;élargis mon profil vers le web moderne (React, Next.js).
            </p>
            <p>
              J&apos;aime transformer des idées en produits concrets qui résolvent
              de vrais problèmes utilisateurs.
            </p>
          </div>

          <div className={styles.skills}>
            <h2>Compétences</h2>
            <div className={styles.skillGrid}>
              <div className={styles.skillCategory}>
                <h3>Mobile & Full Stack</h3>
                <ul>
                  <li>Flutter</li>
                  <li>Java (Android) </li>
                  <li>React & Next.js (en formation)</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>
              
              <div className={styles.skillCategory}>
                <h3>Backend et data</h3>
                <ul>
                  <li>Node.js</li>
                  <li>TCP/IP, MQTT</li>
                  <li>API REST, WebSocke</li>
                  <li>PostgreSQL/PostGIS</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Embarqué & IoT</h3>
                <ul>
                  <li>C (embarqué)</li>
                  <li>ESP32, ESP-IDF</li>
                  <li>FreeRTOS</li>
                  <li>WiFi, UART, I2S, MQTT</li>
                  <li>Site web embarqué (HTML/CSS/JS)</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Traitement du signal et R&D</h3>
                <ul>
                  <li>Python (analyse de signaux, features)</li>
                  <li>Machine Learning</li>
                  <li>Algorithmes temps réel (embarqué)</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Outils et environnements</h3>
                <ul>
                  <li>Git (Gitlab), Jira, Figma</li>
                  <li>VS Code, Android Studio, Cursor</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}