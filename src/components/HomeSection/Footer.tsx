import styles from './footer.module.scss';

function Footer() {
	return (
		<footer>
			<div className={styles.textContainer}>
				<div className={styles.headerText}>
					<h2>SmallPixel</h2>
					<span>.pl</span>
				</div>
				<p className={styles.description}>
					Dziękuje że odwiedziłeś/aś moją stronę. Mam nadzieje że podoba Ci się
					rezultat mojej pracy. Jeśli jesteś zainteresowany/a współpracą ze mną,
					napisz do mnie na adres e-mail podany poniżej. Do usłyszenia!
				</p>
				<div className={styles.socials}>
					<a href='https://www.linkedin.com/in/marcel-mozler-b56152288/'>
						<img src='/images/linkedin2.png' alt='Logo strony linkedin' />
					</a>
					<a href='https://github.com/Yattaof'>
						<img src='/images/github2.png' alt='Logo strony github' />
					</a>
				</div>
				<div className={styles.contactInfo}>
					<p>Skontaktuj się ze mną:</p>
					<p>marcel.mozler00@gmail.com</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
