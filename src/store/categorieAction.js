import {
	ADD_CATEGORIE_ACTION,
	FETCH_DETAILS_CATEGORIE_ACTION,
	FETCH_NEW_CATEGORIE_ACTION,
	RESET_CATEGORIE_ACTION
} from "./ourReducer";

export const addCategorie = (item) => {
	return {
		type: ADD_CATEGORIE_ACTION,
		payload: item
	};
};
export const resetSelectedCategorie = () => {
	return {
		type: RESET_CATEGORIE_ACTION,
		payload: []
	};
};

export const fetchAllCagtegorie = (content) => {
	return {
		type: FETCH_NEW_CATEGORIE_ACTION,
		payload: content
	};
};

export const fetchALLCategorieDetails = (content) => {
	return {
		type: FETCH_DETAILS_CATEGORIE_ACTION,
		payload: content
	};
};
