import { ADD_CATEGORIE_ACTION, RESET_CATEGORIE_ACTION } from "./ourReducer";

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
