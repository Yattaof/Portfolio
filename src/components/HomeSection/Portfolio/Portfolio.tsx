import { Link } from 'react-router-dom';

import styles from './portfolio.module.scss';
import Text from './FootballText/FootballTxt';
import MyWork from './MyWork/MyWork';

function Portfolio() {
	return (
		<div className={styles.portfolioContainer}>
			<div className={styles.footballApp}>
				<div className={styles.appText}>
					<Text value='Strefa' />
					<Text value='Kibica' />
				</div>
				<Link to='/app'>
					<button className={styles.ctaButton}>Otwórz</button>
				</Link>
				<p className={styles.appDescription}>
					<strong>Strefa Kibica</strong> to stworzona przeze mnie aplikacja w
					której można sprawdzić poprzednie, aktualne oraz nadchodzące spotkania
					piłkarskie topowych lig, w tym między innymi: Premier League, Ligue 1,
					LaLiga, Bundesliga, Serie A, Polska Ekstraklasa, oraz CHAMPIONS
					LEAGUE. W aplikacji można również śledzić mecze LIVE. Dzięki niej
					będziesz zawsze na bieżąco ze wszystkimi wynikami twoich ulubionych
					zespołów.
				</p>
				<p className={styles.appDescription}>
					Aplikacja została stworzona z wykorzystaniem framework'a React, użyto
					w niej między innymi: React Router, oraz hook'i: useState, useEffect,
					createContext, swoje zastosowanie znalazł również Axios dzięki któremu
					obsługiwane są wszystkie endpointy API, które z kolei dostarcza
					wszystkie dane.
				</p>
				<div className={styles.technologies}>
					<span className={styles.firstText}>Użyte technologie:</span>
					<div className={styles.logos}>
						<img
							src='/images/html.png'
							alt='Logo języka znaczników "Html"'
							title='HTML'
						/>
						<img
							src='/images/sass.png'
							alt='Logo preprocesora css "Sass"'
							title='SaSS'
						/>
						<img
							src='/images/react.png'
							alt='Logo frameworka "React"'
							title='React'
						/>
						<img
							src='/images/vite.png'
							alt='Logo serwera programistycznego Vite"'
							title='Vite'
						/>
						<img
							src='/images/typescript.png'
							alt='Logo języka programowania "Typescript"'
							title='Typescript'
						/>
						<img
							src='/images/reactRouter.png'
							alt='Logo frameworka Js obłsugujący routing w React "React Router"'
							title='React Router'
						/>
					</div>
				</div>
				<p className={styles.appDescription}>
					*Kod aplikacji "Strefa Kibica" jak i całej strony został udostępniony
					na moim GitHub'ie do którego serdecznie zapraszam!
				</p>
			</div>
			<MyWork />
		</div>
	);
}

export default Portfolio;
