//Prawa autorskie należą do Marcel Mozler - smallpixel.pl
import { useState, useEffect } from 'react';
import matchesService from '../../../services/matchesService'; // Importuj serwis
import { matchInfo } from '../types/types';

import styles from './matchResult.module.scss';

interface Props {
	idEvent: number;
	intHomeScore: number;
	intAwayScore: number;
}

const MatchResult = ({ idEvent, intHomeScore, intAwayScore }: Props) => {
	const [liveMatches, setLiveMatches] = useState<matchInfo[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMatchDetails = () => {
			matchesService
				.liveInfoChampionsLeague()
				.then((response) => {
					const data = response.data.livescore || [];
					setLiveMatches(data);
					setIsLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setIsLoading(false);
				});
		};

		fetchMatchDetails();

		const intervalId = setInterval(fetchMatchDetails, 60000);
		return () => clearInterval(intervalId);
	}, []);

	const currentMatch = liveMatches.find((match) => match.idEvent === idEvent);

	return (
		<div>
			{isLoading ? (
				<p>Ładuje...</p>
			) : currentMatch ? (
				<>
					<p className={styles.liveResult}>{currentMatch.intHomeScore}</p>
					<p className={styles.liveResult}>{currentMatch.intAwayScore}</p>
				</>
			) : (
				<>
					<p>{intHomeScore}</p>
					<p>{intAwayScore}</p>
				</>
			)}
		</div>
	);
};

export default MatchResult;
