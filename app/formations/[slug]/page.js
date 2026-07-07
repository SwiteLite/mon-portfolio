import styles from "./page.module.css";
import formationsData from "@/data/formations.json";
import Image from 'next/image'

// Liste des formations (normalement, ça viendrait d'une API ou d'une base de données)

export async function generateMetadata({ params }) {
    const { slug } = await params
    const formation = formationsData.find(p => p.slug === slug)

    if (!formation) {
        return {
            title: 'Projet non trouvé',
        }
    }

    return {
        title: `${formation.title} | Portfolio`,
        description: formation.longDescription,
        openGraph: {
            title: formation.title,
            description: formation.shortDescription,
            images: [formation.image],
        },
    }
}

export default async function FormationDetail({ params }) {
   const { slug } = await params
    // Next.js passe automatiquement le slug dans params
    const formation = formationsData.find((formation) => formation.slug === slug);

    // Si le projet n'existe pas, afficher un message
    if (!formation) {
        notFound();
    }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{formation.title}</h1>
        <p className={styles.description}>{formation.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
        <Image
            src={formation.image}
            alt={formation.title}
            width={formation.image_size.width}
            height={formation.image_size.height}
            className={styles.image}
        />
        </div>

        <div className={styles.details}>
          <h2>Détails</h2>

          <p>{formation.longDescription}</p>
          <div className={styles.period}>
            test
          </div>

          <div className={styles.technologies}>
            {formation.tags.map((detail, index) => (
              <span key={index} className={styles.tech}>
                {detail}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}


export function generateStaticParams() {
    return formationsData.map((formation) => ({
        slug: formation.slug,
    }))
 }
 