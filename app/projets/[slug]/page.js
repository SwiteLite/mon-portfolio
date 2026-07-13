import styles from "./page.module.css";
import Image from 'next/image'
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel'
import projectsData from "@/data/projects.json";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
    const { slug } = await params
    const project = projectsData.find(p => p.slug === slug)

    if (!project) {
        return {
            title: 'Projet non trouvé',
        }
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.longDescription,
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            images: [project.image],
        },
    }
}


export default async function ProjectDetail({ params }) {
  const { slug } = await params
  // Next.js passe automatiquement le slug dans params
  const project = projectsData.find((project) => project.slug === slug);

  // Si le projet n'existe pas, afficher un message
  if (!project) {
    notFound();
  }

  return (
      <div className={styles.container}>
          <div className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.shortDescription}</p>
          </div>

          <div className={styles.content}>
              <div
                className={`${styles.imageWrapper} ${
                  project.gallery?.length > 0 ? styles.imageWrapperCarousel : ''
                }`}
              >
                {project.gallery?.length > 0 ? (
                  <ImageCarousel
                    images={project.gallery}
                    alt={project.title}
                    width={project.image_size.width}
                    height={project.image_size.height}
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={project.image_size.width}
                    height={project.image_size.height}
                    className={styles.image}
                    preload={true}
                  />
                )}
              </div>
        
              <div className={styles.details}>
                <h2>Description</h2>
                <div className={styles.longDescription}>
                   <p>{project.longDescription}</p>
                </div>
                {project.bulletPoints?.length > 0 && (
                  <>
                    <h2>Points clés</h2>
                    <div className={styles.bulletPoints}>
                      {project.bulletPoints.map((point, index) => (
                        <p key={index}> - {point}</p>
                      ))}
                    </div>
                  </>
                )}
                <h2>Technologies utilisées</h2>
                <div className={styles.technologies}>
                    {project.tags.map((tech, index) => (
                        <span key={index} className={styles.tech}>
                            {tech}
                        </span>
                    ))}
                </div>
                
                {(project.github || project.demo || project.link) && (
                  <div className={styles.links}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        Voir le code →
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.linkPrimary}`}
                      >
                        Voir la démo →
                      </a>
                    )}
                    {project.link && project.link_text && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.linkPrimary}`}
                      >
                        Voir {project.link_text} →
                      </a>
                    )}
                  </div>
                )}
              </div>
          </div>
      </div>
  )
}

export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }))
 }
 