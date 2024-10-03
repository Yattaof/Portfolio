//Prawa autorskie należą do Marcel Mozler - smallpixel.pl
import { useState, useContext } from 'react';
import DateContext from '../context/DateContext';
import styles from './calendar.module.scss';

function Calendar() {
	const [activeButton, setActiveButton] = useState<string | null>(null);
	const context = useContext(DateContext);

	if (!context) {
		return <div>Proszę czekać, ładowawnie...</div>;
	}
	const {
		formattedPrevDay,
		formattedTwoDaysAgo,
		formattedNextDay,
		formattedSecNextDay,
		currentDayAPI,
		prevDayAPI,
		twoDaysAgoAPI,
		nextDayAPI,
		secNextDayAPI,
		setSelectedDayAPI,
	} = context;

	const handleButtonClick = (dayApi: string) => {
		setSelectedDayAPI(dayApi);
		setActiveButton(dayApi);
	};

	return (
		<div className={styles.calendar}>
			<button
				className={activeButton === twoDaysAgoAPI ? styles.active : ''}
				onClick={() => handleButtonClick(twoDaysAgoAPI)}
			>
				{formattedTwoDaysAgo}
			</button>
			<button
				className={activeButton === prevDayAPI ? styles.active : ''}
				onClick={() => handleButtonClick(prevDayAPI)}
			>
				{formattedPrevDay}
			</button>
			<button
				className={activeButton === currentDayAPI ? styles.active : ''}
				onClick={() => handleButtonClick(currentDayAPI)}
			>
				Dzisiaj
			</button>
			<button
				className={activeButton === nextDayAPI ? styles.active : ''}
				onClick={() => handleButtonClick(nextDayAPI)}
			>
				{formattedNextDay}
			</button>
			<button
				className={activeButton === secNextDayAPI ? styles.active : ''}
				onClick={() => handleButtonClick(secNextDayAPI)}
			>
				{formattedSecNextDay}
			</button>
		</div>
	);
}

export default Calendar;
