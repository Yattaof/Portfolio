import { createContext, Dispatch, SetStateAction } from 'react';

export interface DateContextType {
	formattedPrevDay: string;
	formattedTwoDaysAgo: string;
	formattedNextDay: string;
	formattedSecNextDay: string;
	currentDayAPI: string;
	prevDayAPI: string;
	twoDaysAgoAPI: string;
	nextDayAPI: string;
	secNextDayAPI: string;
	selectedDayAPI: string;
	setSelectedDayAPI: Dispatch<SetStateAction<string>>;
	currentTime: string;
}

const DateContext = createContext<DateContextType | null>(null);

export default DateContext;
