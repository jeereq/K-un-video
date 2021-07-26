import Loader from "../components/Loader";
import TvCard from "./TvCard";
import useTitle from "../use/useTitle";
import { useEffect, useState } from "react";
import style from "../style/module/Tv.module.scss";
import { connect } from "react-redux";
import { allcategorie, selectedCategorie } from "../store/categorieSelector";
import { addCategorie } from "../store/categorieAction";
import ListCategorie from "../components/ListCategorieTv";
import { AllTv } from "../store/TvSelectors";
import { addTv } from "../store/TvActions";
const Tv = ({ categorie, selectedCategorie, SerieList, fetchTv }) => {
	const [LoaderValue, setLoader] = useState(true);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_KEY_USER_ID}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
		)
			.then((res) => res.json())
			.then((content) => {
				setLoader(false);
				fetchTv(content.results);
			});
	}, [fetchTv]);

	useTitle("Tv Show by k'un");

	return (
		<>
			<div className={style.container}>
				<ListCategorie
					ListCategorie={categorie}
					selectedCategorie={selectedCategorie}
				/>
				<div className={style.listCards}>
					{SerieList.map((item, index) => (
						<TvCard key={index} item={item} />
					))}
				</div>
			</div>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default Tv;

export const TvStore = connect(
	(state) => ({
		selectCategorie: selectedCategorie(state.categorie),
		categorie: allcategorie(state.categorie),
		SerieList: AllTv(state.categorie)
	}),
	(dispatch) => ({
		selectedCategorie: (categorie) => dispatch(addCategorie(categorie)),
		fetchTv: (TvList) => dispatch(addTv(TvList))
	})
)(Tv);
