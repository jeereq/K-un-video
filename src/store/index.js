import { ourReducer } from "./ourReducer";
import { combineReducers, createStore } from "redux";

const store = createStore(
	combineReducers({
		categorie: ourReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
