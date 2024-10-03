//Prawa autorskie należą do Marcel Mozler - smallpixel.pl
import { useState, useEffect } from 'react';
import matchesService from '../../../services/matchesService';
import { matchInfo } from '../types/types';
import styles from './matchTime.module.scss';

interface Props {
	idEvent: number;
}

const MatchTime = ({ idEvent }: Props) => {
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
					{currentMatch.strStatus === 'HT' ? (
						<p className={styles.liveTime}>Przerwa</p>
					) : currentMatch.strStatus === 'FT' ? (
						<p>Koniec</p>
					) : (
						<p className={styles.liveTime}>
							{currentMatch.strProgress}
							<span className={styles.timeAnimation}>'</span>
						</p>
					)}
				</>
			) : (
				<p>Koniec</p>
			)}
		</div>
	);
};

export default MatchTime;
