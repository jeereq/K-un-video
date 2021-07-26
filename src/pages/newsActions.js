import {
	ADD_NEWS_ACTION,
	ADD_NEWS_MOVIE_ACTION,
	ADD_NEWS_TV_ACTION
} from "../store/ourReducer";

export const addNewsTv = (newsTv) => ({
	type: ADD_NEWS_TV_ACTION,
	payload: newsTv
});

export const addNewsMovie = (newsMovie) => ({
	type: ADD_NEWS_MOVIE_ACTION,
	payload: newsMovie
});

export const addNews = (newsG) => ({ type: ADD_NEWS_ACTION, payload: newsG });
