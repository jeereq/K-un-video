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
	TvList: []
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
							? [{ id: 0, name: "jeereq" }, ...action.payload]
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
		default:
			return state;
	}
};

export const ADD_CATEGORIE_ACTION = "ADD_CATEGORIE_ACTION";
export const RESET_CATEGORIE_ACTION = "RESET_CATEGORIE_ACTION";
export const INITIAL_CATEGORIE_ACTION = "INITIAL_CATEGORIE_ACTION";
export const ADD_MOVIE_ACTION = "ADD_MOVIE_ACTION";
export const ADD_TV_ACTION = "ADD_TV_ACTION";