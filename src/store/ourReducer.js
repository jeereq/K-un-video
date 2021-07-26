const initialState = {
	categorie: [
		{ id: 1, name: "name of categorie" },
		{ id: 2, name: "name of categorie" },
		{ id: 3, name: "name of categorie" },
		{ id: 4, name: "name of categorie" },
		{ id: 5, name: "name of categorie" },
		{ id: 6, name: "name of categorie" }
	],
	selectedCategorie: {},
	MovieList: [],
	TvList: [],
	newsMovie: [],
	newsTv: [],
	news: []
};

export const ourReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIAL_CATEGORIE_ACTION:
			return {
				...state,
				categorie: [...action.payload]
			};
		case ADD_CATEGORIE_ACTION:
			return {
				...state,
				selectedCategorie: {
					...state.selectedCategorie,
					[action.payload]:
						state.selectedCategorie[action.payload] === false
							? [{ id: 0, name: "all" }, ...action.payload]
							: false
				}
			};

		case RESET_CATEGORIE_ACTION:
			return { ...state, selectedCategorie: action.payload };
		case ADD_MOVIE_ACTION:
			return {
				...state,
				MovieList: action.payload
			};
		case ADD_TV_ACTION:
			return {
				...state,
				TvList: action.payload
			};
		case ADD_NEWS_TV_ACTION:
			return {
				...state,
				newsTv: action.payload
			};
		case ADD_NEWS_MOVIE_ACTION:
			return {
				...state,
				newsMovie: action.payload
			};
		case ADD_NEWS_ACTION:
			return {
				...state,
				news: action.payload
			};
		case FETCH_NEW_CATEGORIE_ACTION:
			return {
				...state,
				categorie: [{ id: 0, name: "all" }, ...action.payload]
			};
		default:
			return state;
	}
};

export const RESET_CATEGORIE_ACTION = "RESET_CATEGORIE_ACTION";
export const INITIAL_CATEGORIE_ACTION = "INITIAL_CATEGORIE_ACTION";
export const ADD_CATEGORIE_ACTION = "ADD_CATEGORIE_ACTION";
export const ADD_TV_ACTION = "ADD_TV_ACTION";
export const ADD_MOVIE_ACTION = "ADD_MOVIE_ACTION";
export const ADD_NEWS_TV_ACTION = "ADD_NEWS_TV_ACTION";
export const ADD_NEWS_MOVIE_ACTION = "ADD_NEWS_MOVIE_ACTION";
export const ADD_NEWS_ACTION = "ADD_NEWS_ACTION";
export const FETCH_NEW_CATEGORIE_ACTION = "FETCH_NEW_CATEGORIE_ACTION";
