import { ADD_MOVIE_ACTION } from "./ourReducer";

export const addMovie = (MovieList) => ({
	type: ADD_MOVIE_ACTION,
	payload: MovieList
});
