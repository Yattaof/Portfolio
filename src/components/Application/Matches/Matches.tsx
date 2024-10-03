import styles from './matches.module.scss';
import Poland from './Leagues/Poland';
import Spain from './Leagues/Spain';
import France from './Leagues/France';
import Italy from './Leagues/Italy';
import Germany from './Leagues/Germany';
import England from './Leagues/England';
import ChampionsLeague from './Leagues/ChampionsLeague';

function Matches() {
	const leaguesComponents = [
		<ChampionsLeague key='championsLeague'/>,
		<Spain key='spain' />,
		<France key='france' />,
		<Italy key='itlay' />,
		<Germany key='germany' />,
		<England key='england' />,
		<Poland key='poland' />,
	];

	return (
		<>
			{leaguesComponents.map((league) => {
				return (
					<div className={styles.matches} key={league.key}>
						{league}
					</div>
				);
			})}
		</>
	);
}

export default Matches;
