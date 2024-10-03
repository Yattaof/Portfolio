//Prawa autorskie należą do Marcel Mozler - smallpixel.pl
import styles from './application.module.scss';
import { DateProvider } from './context/DateProvider';
import { Link } from 'react-router-dom';
import Calendar from './Calendar/Calendar';
import Matches from './Matches/Matches';

function Application() {
	return (
		<div className={styles.application}>
			<div className={styles.welcomeText}>
				<div className={styles.headText}>
					<Link to='/'>
						<button>Strona główna</button>
					</Link>
					<h1>Strefa Kibica</h1>
				</div>
				<p>
					Witam w Strefie Kibica, w strefie gdzie znajdziesz informacje o
					meczach ze świata piłki nożnej takich lig jak: LaLiga, Ligue1, SerieA,
					Bundesliga, Premier League, Ekstraklasa oraz wszystkie mecze Champions
					League! Poniżej znajduje się tabela w której zobaczysz wszystkie
					spotkania dnia dzisiejszego, te nadchodzące oraz te które już się
					odbyły.
				</p>
				<p>
					Jeśli ciekawi Cię aktualny wynik meczu, spokojnie on również jest
					tutaj wyświetlany więc zobaczysz wszystkie wyniki{' '}
					<span className={styles.liveSpan}>LIVE</span>.
				</p>
				<p className={styles.addon}>
					*Api posiada swoje ograniczenia w request'ach. W razie potrzeby
					odczekaj minutę.
				</p>
			</div>
			<DateProvider>
				<Calendar />
				<Matches />
			</DateProvider>
			<div className={styles.contactText}>
				<p>
					Jeśli masz jakieś propozycje, co mogło by się znaleźć w tej aplikacji,
					jakie informacje pomogły by Ci być na bierząco. Napisz do mnie:
				</p>
				<p className={styles.emailAdress}>
					Adres e-mail: marcel.mozler00@gmail.com
				</p>
			</div>
		</div>
	);
}

export default Application;
