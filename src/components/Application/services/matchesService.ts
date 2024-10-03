import axios from 'axios';

const api = axios.create({
	baseURL: 'https://www.thesportsdb.com',
});

const API_KEY = 'Your_API_Key';

// Funkcja przyjmuje datę jako argument - endpoint do wyświetlania aktualnych meczy
const leaguesMatches = (date: string, leagueName: string) =>
	api.get(`/api/v1/json/${API_KEY}/eventsday.php?d=${date}&l=${leagueName}`);

//endpoint do wyświetlania aktualnej tabeli (względem: numer id ligi i aktualnego sezonu)
const tableOfPoints = (leagueId: number, sezon: string) =>
	api.get(`/api/v1/json/${API_KEY}/lookuptable.php?l=${leagueId}&s=${sezon}`);

//endpoint do zczytania aktualnego sezonu ligi - potrzebne do tabeli
const latestSeason = (leagueId: number) =>
	api.get(`/api/v1/json/${API_KEY}/search_all_seasons.php?id=${leagueId}`);

const liveInfoChampionsLeague = () =>
	api.get(`/api/v2/json/livescore/eventsday.php?id=4480`, {
		headers: { X_API_KEY: '644637' },
	});

export default {
	leaguesMatches,
	tableOfPoints,
	latestSeason,
	liveInfoChampionsLeague,
};
