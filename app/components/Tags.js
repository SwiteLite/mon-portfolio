import styles from './Tags.module.css'

export default function Tags({ name }) {
  return <span className={styles.tag}>{name}</span>
}