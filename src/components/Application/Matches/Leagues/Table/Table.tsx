import { useEffect, useState, useRef } from 'react';
import { seasonInfo, teamsInfo } from '../types/types';
import matchesService from '../../../services/matchesService';
import styles from './table.module.scss';

interface Props {
	show: boolean;
	onClose: () => void;
	leagueId: number;
}

function Table({ show, onClose, leagueId }: Props) {
	const tableRef = useRef<HTMLDivElement>(null);

	const [teamsTable, setTeamsTable] = useState<teamsInfo[]>([]);
	const [allSeasons, setAllSeasons] = useState<seasonInfo[]>([]);
	const [isSeasonsLoaded, setIsSeasonsLoaded] = useState(false);

	useEffect(() => {
		if (leagueId) {
			matchesService
				.latestSeason(leagueId)
				.then((result) => {
					const seasons = result.data.seasons || [];
					setAllSeasons(seasons);
					setIsSeasonsLoaded(true);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [leagueId]);

	const seasonForTable = allSeasons[allSeasons.length - 1];

	useEffect(() => {
		if (leagueId && isSeasonsLoaded && seasonForTable) {
			matchesService
				.tableOfPoints(leagueId, seasonForTable.strSeason)
				.then((result) => {
					const teams = result.data.table || [];
					setTeamsTable(teams);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		const tableElement = tableRef.current;

		// Funkcja do zamykania tabeli po kliknięciu w obszar poza tabelą
		const handleClickOutside = (event: MouseEvent) => {
			if (tableElement && !tableElement.contains(event.target as Node)) {
				onClose();
			}
		};
		document.addEventListener('mouseup', handleClickOutside);

		// Zablokowanie scrolla, gdy tabela jest widoczna
		if (show) {
			document.body.style.overflow = 'hidden';
			tableElement?.classList.add(styles.show);
		} else {
			document.body.style.overflow = '';
			tableElement?.classList.remove(styles.show);
		}

		return () => {
			document.removeEventListener('mouseup', handleClickOutside);
			document.body.style.overflow = ''; // Przywrócenie scrolla po demontażu komponentu
		};
	}, [show, onClose, leagueId, isSeasonsLoaded, seasonForTable]);

	//Zmiana liter i osobne ich wyświetlanie
	const transformLetters = (form: string) => {
		const letterMap: { [key: string]: string } = {
			W: 'Z',
			L: 'P',
			D: 'R',
		};
		const getBackgroundClass = (char: string) => {
			switch (char) {
				case 'Z':
					return styles.win;
				case 'P':
					return styles.loss;
				case 'R':
					return styles.draw;
				default:
					return '';
			}
		};
		return form.split('').map((char, index) => {
			const translatedChar = letterMap[char] || char;
			const backgroundClass = getBackgroundClass(translatedChar);
			return (
				<span key={index} className={`${styles.formLetter} ${backgroundClass}`}>
					{translatedChar}
				</span>
			);
		});
	};

	return (
		<>
			{show && <div className={styles.overlay} />}
			<div className={styles.table} ref={tableRef}>
				<div className={styles.headerText}>
					<button onClick={onClose}>Zamknij</button>
					<h2>Aktualna tabela:</h2>
				</div>
				<ul>
					<li className={styles.headerRow}>
						<div className={styles.firstDiv}>
							<span title='Miejsce w tabeli'>#</span>
							<span title='Herb drużyny'>Herb</span>
							<span className={styles.teamName} title='Nazwa drużyny'>
								Drużyna
							</span>
						</div>

						<div className={styles.secDiv}>
							<span
								className={`${styles.displayM} ${styles.displayT}`}
								title='Rozegrane mecze'
							>
								M
							</span>
							<span className={styles.displayM} title='Zwycięstwa'>
								Z
							</span>
							<span className={styles.displayM} title='Remisy'>
								R
							</span>
							<span
								className={`${styles.displayM} ${styles.loses}`}
								title='Porażki'
							>
								P
							</span>
							<span
								className={`${styles.displayM} ${styles.displayT} ${styles.goals}`}
								title='Bramki'
							>
								B
							</span>
							<span className={styles.displayM} title='Różnica bramek'>
								RB
							</span>
							<span title='Punkty'>Pkt.</span>
							<span className={styles.displayM} title='Ostatnie spotkania'>
								Forma
							</span>
						</div>
					</li>
					{teamsTable.map((team) => {
						return (
							<li key={team.idTeam}>
								<div className={styles.firstDiv}>
									<span>{team.intRank}</span>
									<span>
										<img
											src={team.strBadge}
											alt={`Herb drużyny ${team.strTeam}`}
										/>
									</span>
									<span className={styles.teamName}>{team.strTeam}</span>
								</div>
								<div className={styles.secDiv}>
									<span className={`${styles.displayM} ${styles.displayT}`}>
										{team.intPlayed}
									</span>
									<span className={styles.displayM}>{team.intWin}</span>
									<span className={styles.displayM}>{team.intDraw}</span>
									<span className={styles.displayM}>{team.intLoss}</span>
									<span className={`${styles.displayM} ${styles.displayT}`}>
										<span>{team.intGoalsFor}</span>:
										<span>{team.intGoalsAgainst}</span>
									</span>
									<span className={styles.displayM}>
										{team.intGoalDifference}
									</span>
									<span>{team.intPoints}</span>
									<span>
										<span className={`${styles.formStats} ${styles.displayM}`}>
											{transformLetters(team.strForm)}
										</span>
									</span>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default Table;
