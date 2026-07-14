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
            Ingénieur Logiciel avec 4 ans d&apos;expérience en startup, mon expertise n&apos;est pas dans un langage ou une technologie mais dans la compréhension du besoin et l&apos;architecture globale : 
            du traitement du signal et de l&apos;embarqué aux applications mobiles et au backend.
            J&apos;aime construire des produits complets de bout en bout qui répondent à de vrais enjeux sur le terrain, où l&apos;impact réel guide la technique.
            <br />
            Aujourd&apos;hui j&apos;élargis mon profil vers le web moderne (React, Next.js), avec la même approche : comprendre le besoin, prototyper vite, livrer un produit abouti.
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
                  <li>API REST, WebSocket</li>
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
                  <li>Git (GitLab), Jira, Figma</li>
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