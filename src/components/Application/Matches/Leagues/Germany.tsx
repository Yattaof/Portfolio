//Prawa autorskie należą do Marcel Mozler - smallpixel.pl
import { useEffect, useState, useContext } from 'react';
import { matchInfo } from './types/types';
import matchesService from './../../services/matchesService';
import DateContext, { DateContextType } from './../../context/DateContext';
import Table from './Table/Table';
import MatchResult from './MatchStarted/MatchResult';
import MatchTime from './MatchStarted/MatchTime';

import styles from './leagues.module.scss';

function Germany() {
	const [posts, setPosts] = useState<matchInfo[]>([]);
	const dateContext = useContext(DateContext) as DateContextType;
	const { selectedDayAPI, currentDayAPI, currentTime } = dateContext!;
	const [showTable, setShowTable] = useState(false);

	const league = 'German_Bundesliga';
	const idLeague = 4331;

	useEffect(() => {
		if (selectedDayAPI) {
			matchesService
				.leaguesMatches(selectedDayAPI, league)
				.then((result) => {
					const events = result.data.events || [];

					//Sortowanie wyświetlania meczy po godzinie
					const sortedEvents = events.sort((a: matchInfo, b: matchInfo) => {
						const [hoursA, minutesA] = a.strTimeLocal.split(':').map(Number);
						const [hoursB, minutesB] = b.strTimeLocal.split(':').map(Number);

						if (hoursA !== hoursB) {
							return hoursA - hoursB;
						}
						return minutesA - minutesB;
					});

					setPosts(sortedEvents);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [selectedDayAPI]);

	const handleTable = () => {
		setShowTable(!showTable);
	};
	const closeTable = () => {
		setShowTable(false);
	};

	return (
		<>
			<div className={styles.leagueName}>
				<div className={styles.leagueInfo}>
					<img src='/images/germany.png' alt='Flaga Niemiec' />
					<h3>Bundesliga</h3>
				</div>
				<button onClick={handleTable}>Tabela</button>
			</div>

			{showTable && (
				<Table
					leagueId={idLeague}
					show={showTable}
					onClose={() => closeTable()}
				/>
			)}

			{posts.length > 0 ? (
				posts.map((post) => (
					<div
						key={post.idEvent}
						className={`${styles.event} + ${styles.border}`}
					>
						<div className={styles.startTime}>
							{selectedDayAPI < currentDayAPI ? (
								<p>Koniec</p>
							) : selectedDayAPI > currentDayAPI ? (
								<p>{post.strTimeLocal.slice(0, -3)}</p>
							) : post.strTimeLocal.slice(0, -3) <= currentTime ? (
								<MatchTime idEvent={post.idEvent} />
							) : (
								<p>{post.strTimeLocal.slice(0, -3)}</p>
							)}
						</div>
						<div className={styles.infoContainer}>
							<div className={styles.teams}>
								<div className={styles.homeTeam}>
									<img
										src={post.strHomeTeamBadge}
										alt='Logo drużyny gospodarzy'
									/>
									<span>{post.strHomeTeam}</span>
								</div>
								<div className={styles.awayTeam}>
									<img src={post.strAwayTeamBadge} alt='Logo drużyny gości' />
									<span>{post.strAwayTeam}</span>
								</div>
							</div>
							<div className={styles.result}>
								{selectedDayAPI !== currentDayAPI ? (
									<>
										<p>
											{post.intHomeScore !== null ? post.intHomeScore : '-'}
										</p>
										<p>
											{post.intAwayScore !== null ? post.intAwayScore : '-'}
										</p>
									</>
								) : post.strTimeLocal.slice(0, -3) <= currentTime ? (
									<MatchResult
										idEvent={post.idEvent}
										intHomeScore={post.intHomeScore}
										intAwayScore={post.intAwayScore}
									/>
								) : (
									<>
										<p>
											{post.intHomeScore !== null ? post.intHomeScore : '-'}
										</p>
										<p>
											{post.intAwayScore !== null ? post.intAwayScore : '-'}
										</p>
									</>
								)}
							</div>
						</div>
					</div>
				))
			) : (
				<p className={styles.noMatches}>Brak spotkań w dniu dzisiejszym</p>
			)}
		</>
	);
}

export default Germany;
