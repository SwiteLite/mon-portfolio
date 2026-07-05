
import styles from './Footer.module.css'

const Footer = () => {


	return (
		<footer className={styles.footer}>
			<div className={styles.name}>
				Paul ANDRÉ
			</div>
			<div className={styles.social}>
				<a className={styles.link} href="https://www.linkedin.com/in/paul-andre45/" target="_blank" rel="noopener noreferrer">
					LinkedIn
				</a>
				<a className={styles.link} href="https://www.linkedin.com/in/paul-andre45/" target="_blank" rel="noopener noreferrer">
					Github
				</a>
			</div>
			<div className={styles.social}>
			   2026 
			</div>

		</footer>
	)
}

export default Footer