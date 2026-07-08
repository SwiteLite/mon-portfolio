
import styles from './Footer.module.css'

const Footer = () => {


	return (
		<footer className={styles.footer}>
			<div className={styles.name}>
				2026 - Paul ANDRÉ
			</div>
			<div className={styles.social}>
				<a className={styles.link} href="https://www.linkedin.com/in/paul-andre45/" target="_blank" rel="noopener noreferrer">
					LinkedIn
				</a>
			</div>


		</footer>
	)
}

export default Footer