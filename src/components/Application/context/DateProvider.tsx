//Prawa autorskie należą do Marcel Mozler - smallpixel.pl
import React, { useEffect, useState } from 'react';
import DateContext from './DateContext';

interface Props {
	children: React.ReactNode;
}

export const DateProvider = ({ children }: Props) => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDayAPI, setSelectedDayAPI] = useState('');
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		const updateDate = () => {
			const newDate = new Date();
			if (newDate.toDateString() !== currentDate.toDateString()) {
				setCurrentDate(newDate);
			}
		};

		const intervalId = setInterval(updateDate, 60000);
		return () => clearInterval(intervalId);
	}, [currentDate]);

	useEffect(() => {
		const updateTime = () => {
			const newTime = new Date();
			setCurrentTime(
				newTime.toLocaleTimeString('pl-PL', {
					hour: '2-digit',
					minute: '2-digit',
				})
			);
		};
		const timeIntervalId = setInterval(updateTime, 60000);
		updateTime();
		return () => clearInterval(timeIntervalId);
	}, []);

	// Formatowanie daty do wyświetlania na stronie (niebieskie przyciski)
	const userLocale = 'pl-PL';
	const formatDate = (date: Date) => {
		return date.toLocaleDateString(userLocale, {
			day: '2-digit',
			month: '2-digit',
		});
	};

	//Dni poprzednie i dni następne
	const adjustDate = (date: Date, days: number) => {
		const newDate = new Date(date);
		newDate.setDate(date.getDate() + days);
		return newDate;
	};

	const prevDay = adjustDate(currentDate, -1);
	const twoDaysAgo = adjustDate(currentDate, -2);
	const nextDay = adjustDate(currentDate, +1);
	const secNextDay = adjustDate(currentDate, +2);

	// Dni do wyświetlenia (niebieskie przyciski)
	const formattedPrevDay = formatDate(prevDay);
	const formattedTwoDaysAgo = formatDate(twoDaysAgo);
	const formattedNextDay = formatDate(nextDay);
	const formattedSecNextDay = formatDate(secNextDay);

	// Formatowanie daty dla API (przyjumuje format rok-miesiąc-dzień)
	const dateforAPI = (date: Date) => {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	const currentDayAPI = dateforAPI(currentDate);
	const prevDayAPI = dateforAPI(prevDay);
	const twoDaysAgoAPI = dateforAPI(twoDaysAgo);
	const nextDayAPI = dateforAPI(nextDay);
	const secNextDayAPI = dateforAPI(secNextDay);

	useEffect(() => {
		setSelectedDayAPI(currentDayAPI);
	}, [currentDayAPI]);

	return (
		<DateContext.Provider
			value={{
				formattedPrevDay,
				formattedTwoDaysAgo,
				formattedNextDay,
				formattedSecNextDay,
				currentDayAPI,
				prevDayAPI,
				twoDaysAgoAPI,
				nextDayAPI,
				secNextDayAPI,
				selectedDayAPI,
				setSelectedDayAPI,
				currentTime,
			}}
		>
			{children}
		</DateContext.Provider>
	);
};
