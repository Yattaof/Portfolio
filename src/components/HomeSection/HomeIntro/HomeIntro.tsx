import styles from './homeIntro.module.scss';
import ScrambleText from './WelcomeText';

function HomeIntro() {
	return (
		<div className={styles.homeIntro}>
			<div className={styles.descSection}>
				<ScrambleText />
				<p>
					Mam na imię <strong>Marcel</strong>, od małego interesowałem się
					komputerem, moja przygoda zaczęła się od grafiki komputerowej, gdzie
					zajmowałem się tworzeniem animacji, montażem filmów i projektowaniem
					różnych grafik w tym na przykład logotypów. To właśnie pasja do
					kreatywnego tworzenia wizualnych treści zaprowadziła mnie na ścieżkę
					programowania, które odkryłem w poźniejszych latach. Poznając różne
					języki programowania, zdałem sobię sprawę że,{' '}
					<strong>front-end</strong> idealnie mogę połączyć ze swoją pasją do
					grfiki komputerowej.
				</p>
				<p>
					Podczas studiów zacząłem realizować pierwsze projekty komercyjne,
					zdobywając doświadczenie jako freelancer. Każdy projekt pozwalał mi
					się rozwijać i pogłębiać wiedzę w zakresie programowania
					forntend'owego oraz zdobyć doświadczenie w pracy z klientem. Dziś
					wykorzystując zarówno swoje umiejętności graficzne, jak i
					programistyczne, łącze estetykę z funkcjonalnością.
				</p>
			</div>
			<div className={styles.heroImgSection}>
				<img
					src='/images/heroImg3.png'
					alt='Grafika przedstawia laptopa z otwartym programem IDE obok laptopa stoi kawa z mlekiem oraz smartfon z niebieską tapetą'
				/>
			</div>
		</div>
	);
}

export default HomeIntro;
