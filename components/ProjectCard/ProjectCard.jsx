import styles from './ProjectCard.module.css'
import Image from 'next/image'
import Tag from '@/components/Tag/Tag'

const ProjectCard = ({project}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                  <div className={styles.contract}>
                    <span>{project.contract}</span>
                  </div>
                  <div className={styles.period}>
                    <span>{project.period}</span>
                  </div>
                </div>

                <div className={styles.imageWrapper}>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={project.image_size.width}
                    height={project.image_size.height}
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
            </div>
        )
    }

export default ProjectCard