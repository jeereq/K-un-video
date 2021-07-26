import { ADD_NEWS_MOVIE_ACTION, ADD_NEWS_TV_ACTION } from "../store/ourReducer";

export const addNewsTv = (newsTv) => ({
	type: ADD_NEWS_TV_ACTION,
	payload: newsTv
});

export const addNewsMovie = (newsMovie) => ({
	type: ADD_NEWS_MOVIE_ACTION,
	payload: newsMovie
});
