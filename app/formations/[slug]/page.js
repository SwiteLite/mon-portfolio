import styles from "./page.module.css";
import formationsData from "@/data/formations.json";
import Image from 'next/image'
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params
    const formation = formationsData.find(f => f.slug === slug)

    if (!formation) {
        return {
            title: 'Formation non trouvée',
        }
    }

    return {
        title: `${formation.title} | Portfolio`,
        description: formation.longDescription,
        openGraph: {
            title: formation.title,
            description: formation.shortDescription ?? formation.description,
            images: [formation.image],
        },
    }
}

export default async function FormationDetail({ params }) {
   const { slug } = await params
    const formation = formationsData.find((f) => f.slug === slug);

    if (!formation) {
        notFound();
    }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{formation.title}</h1>
        <p className={styles.description}>
          {formation.shortDescription ?? formation.description}
        </p>
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
          <h2>Description</h2>
          <div className={styles.longDescription}>
            <p>{formation.longDescription}</p>
          </div>

          {formation.bulletPoints?.length > 0 && (
            <>
              <h2>Points clés</h2>
              <div className={styles.bulletPoints}>
                {formation.bulletPoints.map((point, index) => (
                  <p key={index}> - {point}</p>
                ))}
              </div>
            </>
          )}

          {formation.period && (
            <>
              <h2>Période</h2>
              <div className={styles.period}>
                <p>{formation.period}</p>
              </div>
            </>
          )}

          {formation.technologies?.length > 0 && (
            <>
              <h2>Technologies</h2>
              <div className={styles.technologies}>
                {formation.technologies.map((tech, index) => (
                  <span key={index} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}

          {formation.modules?.length > 0 && (
            <>
              <h2>Modules</h2>
              <div className={styles.modules}>
                {formation.modules.map((module, index) => (
                  <p key={index}> - {module}</p>
                ))}
              </div>
            </>
          )}
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
