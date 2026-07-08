import styles from './page.module.css'
import Link from 'next/link'

import projectsData from '@/data/projects.json'
import ProjectCard from '@/components/ProjectCard/ProjectCard'


export const metadata = {
    title: 'Mes Projets | Portfolio',
    description: 'Découvrez mes projets de développement web : applications React, sites Next.js et plus encore.',
}

const sections = [
  {
    id: 'professionnel',
    title: 'Expériences professionnelles',
    subtitle: 'Produits livrés en entreprise',
  },
  {
    id: 'stage',
    title: 'Stages',
    subtitle: 'Premières missions en entreprise',
  },
  {
    id: 'academique',
    title: 'Projets académiques',
    subtitle: 'Master traitement du signal & systèmes embarqués',
  },
] 

export default function Projects() {
  return (
    <div className="container">
      <h1 className="title">Mes Projets</h1>
      <p className="description">
        Découvrez les projets sur lesquels j&apos;ai travaillé
      </p>

      {sections.map((section) => {
        const projects = projectsData.filter(p => p.category === section.id)
        if (projects.length === 0) return null

        return (
          <section key={section.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <p className={styles.sectionSubtitle}>{section.subtitle}</p>
            
            <div className={styles.grid}>
              {projects.map((project) => (
                <Link
                  href={`/projets/${project.slug}`}
                  key={project.id}
                  className={styles.card}
                >
                  <ProjectCard project={project} />
                </Link>
              ))}
            </div>
            </section>
            )
      })}

    </div>
  )
}
