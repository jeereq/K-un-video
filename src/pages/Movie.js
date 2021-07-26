import Loader from "../components/Loader";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import useTitle from "../use/useTitle";
import ListCategorie from "../components/ListCategorie";
import style from "../style/module/Movie.module.scss";
import { connect } from "react-redux";
import { allcategorie, selectedCategorie } from "../store/categorieSelector";
import { addCategorie, fetchAllCagtegorie } from "../store/categorieAction";
import { AllMovie } from "../store/MovieSelectors";
import { addMovie } from "../store/MovieActions";
const Movie = ({
	categorie,
	selectedCategorie,
	MovieList,
	fetchMovie,
	fetchCategorie
}) => {
	const [LoaderValue, setLoader] = useState(true);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY_USER_ID}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
		)
			.then((res) => res.json())
			.then((content) => {
				setLoader(false);
				fetchMovie(content.results);
			})
			.catch((error) => console.log(error));
	}, [fetchMovie]);

	useTitle("Movie show by k'un");
	return (
		<>
			<div className={style.container}>
				<ListCategorie
					ListCategorie={categorie}
					selectedCategorie={selectedCategorie}
					fetchCategorie={fetchCategorie}
				/>
				<div className={style.listCards}>
					{MovieList.map((item, index) => {
						return <MovieCard key={index} item={item} />;
					})}
				</div>
			</div>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};

export const MovieStore = connect(
	(state) => ({
		selectCategorie: selectedCategorie(state.categorie),
		categorie: allcategorie(state.categorie),
		MovieList: AllMovie(state.categorie)
	}),
	(dispatch) => ({
		fetchCategorie: (ListCategorie) =>
			dispatch(fetchAllCagtegorie(ListCategorie)),
		fetchMovie: (MovieList) => dispatch(addMovie(MovieList)),
		selectedCategorie: (categorie) => dispatch(addCategorie(categorie))
	})
)(Movie);

export default Movie;
