import Link from "next/link";
import styles from "./page.module.css";
import formationsData from '@/data/formations.json'
import Image from 'next/image'

export default function Formations() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mes Formations et Diplômes</h1>
      <p className={styles.description}>
        Découvrez mon parcours universitaire
      </p>

      <div className={styles.grid}>
        {formationsData.map((formation) => (
          <Link
            href={`/formations/${formation.slug}`}
            key={formation.id}
            className={styles.card}
          >

           <div className={styles.header}>
          
                  <div className={styles.period}>
                    <span>{formation.period}</span>
                  </div>
                </div>

                <div className={styles.imageWrapper}>
                <Image
                    src={formation.image}
                    alt={formation.title}
                    width={formation.image_size.width}
                    height={formation.image_size.height}
                    className={styles.image}
                />
                </div>
            <h2>{formation.title}</h2>
            <p>{formation.description}</p>
            <div className={styles.tags}>
              {formation.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <span className={styles.viewMore}>Voir la formation →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}