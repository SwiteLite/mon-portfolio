import styles from './page.module.css'
import Link from 'next/link'
import Tag from '@/components/Tag/Tag'

export default function Projects() {
  return (
    <div className="container">
      <h1 className="title">Formations et Diplômes </h1>
      <p className="description">
        Découvrez mon parcours univsersitaire
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>2020 - 2022 :  Université Clermont-Auvergne</h2>
          <p>Master Systèmes Embarqués pour le Traitement du Signal,
          des Images et du Son</p>
          <div className={styles.tags}>
            <Tag>Systèmes Embarqués</Tag>
            <Tag>Traitement du signal</Tag>
            <Tag>Machine Learning et IA</Tag>
          </div>
        </div>

        <div className={styles.card}>
          <h2>2017 - 2020 : Université d’Orléans</h2>
          <p>Licence de Physique spécialisée Sciences de l’Ingénieur</p>
          <div className={styles.tags}>
            <Tag>Traitement du signal</Tag>
            <Tag>Simulation </Tag>
            <Tag>Electronique </Tag>
          </div>
        </div>

      </div>
    </div>
  )
}
