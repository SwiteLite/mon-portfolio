import styles from './page.module.css'
import Link from 'next/link'
import Tag from '@/components/Tag/Tag'
import Image from 'next/image'
import projectsData from '@/data/projects.json'


export const metadata = {
    title: 'Mes Projets | Portfolio',
    description: 'Découvrez mes projets de développement web : applications React, sites Next.js et plus encore.',
  }
  

export default function Projects() {
  return (
    <div className="container">
      <h1 className="title">Mes Projets</h1>
      <p className="description">
        Découvrez les projets sur lesquels j&apos;ai travaillé
      </p>

      <div className={styles.grid}>
          {projectsData.map((project) => (
              <Link
                  href={`/projets/${project.slug}`}
                  key={project.id}
                  className={styles.card}
              >
                  <div className={styles.imageWrapper}>
                  <Image
                        src={project.image}
                        alt={project.title}
                        width={220}
                        height={500}
                        className={styles.image}
                    />

                  </div>
                  <div className={styles.content}>
                      <h2>{project.title}</h2>
                      <p>{project.shortDescription}</p>
                      <div className={styles.tags}>
                          {project.tags.map((tech, index) => (
                              <Tag key={index} isDark={true}>{tech}</Tag>
                          ))}
                      </div>
                      <span className={styles.viewMore}>Voir le projet →</span>
                  </div>
              </Link>
          ))}
      </div>

    </div>
  )
}
