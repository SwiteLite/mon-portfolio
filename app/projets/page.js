import styles from './page.module.css'
import Link from 'next/link'
import Tag from '@/components/Tag/Tag'

export default function Projects() {
  return (
    <div className="container">
      <h1 className="title">Mes Projets</h1>
      <p className="description">
        Découvrez les projets sur lesquels j&apos;ai travaillé
      </p>

      <div className={styles.grid}>
        <Link href="/projets/portfolio" className={styles.card}>
          <h2>Portfolio Personnel</h2>
          <p>Site web moderne construit avec Next.js</p>
          <div className={styles.tags}>
            <Tag>Next.js</Tag>
            <Tag>React</Tag>
            <Tag>CSS Modules</Tag>
          </div>
        </Link>

        <Link href="/projets/ecommerce" className={styles.card}>
          <h2>App E-commerce</h2>
          <p>Application de vente en ligne avec panier</p>
          <div className={styles.tags}>
            <Tag>React</Tag>
            <Tag>Node.js</Tag>
            <Tag>MongoDB</Tag>
          </div>
        </Link>

        <Link href="/projets/blog" className={styles.card}>
          <h2>Blog Technique</h2>
          <p>Blog personnel sur le développement web</p>
          <div className={styles.tags}>
            <Tag>Next.js</Tag>
            <Tag>Markdown</Tag>
            <Tag>SEO</Tag>
          </div>
        </Link>
      </div>
    </div>
  )
}
