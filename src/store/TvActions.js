import { ADD_TV_ACTION } from "./ourReducer";

export const addTv = (TvList) => ({
	type: ADD_TV_ACTION,
	payload: TvList
});
