export interface matchInfo {
	idEvent: number;
	strLeagueBadge: string;
	strTimeLocal: string;
	strHomeTeam: string;
	strHomeTeamBadge: string;
	intHomeScore: number;
	strAwayTeam: string;
	strAwayTeamBadge: string;
	intAwayScore: number;
	strProgress: string;
	strStatus: string;
}

export interface teamsInfo {
	idTeam: number;
	intRank: number; // miejsce w rankingu
	strBadge: string; // logo zespołu
	intPoints: number; // zdobyte punkty
	strTeam: string; // nazwa klubu
	intPlayed: number; // rozegrane mecze
	intWin: number; //wygrane mecze
	intDraw: number; // remisy
	intLoss: number; //przegrane
	intGoalsFor: number; // suma wszystkich goli
	intGoalsAgainst: number; //suma straconych bramek
	intGoalDifference: number; //różnica bramkowa
	strForm: string; // aktualny bilans w meczach jak na flashscore "WWWWW"
}

export interface seasonInfo {
	strSeason: string;
}