import Search from "../pages/Search";
import { connect } from "react-redux";
import { allcategorie, selectedCategorie } from "./categorieSelector";
import { addCategorie, resetSelectedCategorie } from "./categorieAction";

export const SearchStore = connect(
	(state) => ({
		selectedCategorie: selectedCategorie(state.categorie),
		categorie: allcategorie(state.categorie)
	}),
	(dispatch) => ({
		selectCategorie: (categorie) => dispatch(addCategorie(categorie)),
		restetCategorie: () => dispatch(resetSelectedCategorie())
	})
)(Search);
