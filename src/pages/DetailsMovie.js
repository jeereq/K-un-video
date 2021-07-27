import style from "../style/module/DetailsMovie.module.scss";
import { useEffect, useState } from "react";
import DetailsBanniereMovie from "../components/DetailsBanniereMovie";
import Loader from "../components/Loader";
import useTitle from "../use/useTitle";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
const DetailsMovie = () => {
	const [LoaderValue, setLoader] = useState(true);
	const [state, setState] = useState({
		poster_path: "",
		genres: [],
		production_companies: []
	});
	const [similarMovies, setSimilarMovies] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY_USER_ID}&language=en-US`
		)
			.then((res) => res.json())
			.then((contentNews) => {
				setState(contentNews);
				return fetch(
					`https://api.themoviedb.org/3/movie/${id}/similar?api_key=23e640cfc012242a230d71adac41e090&language=en-US&page=1`
				);
			})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSimilarMovies(data.results);
				setLoader(false);
			});
		return () => {
			setSimilarMovies([]);
			setLoader(true);
			setState({
				poster_path: "",
				genres: [],
				production_companies: []
			});
		};
	}, [id]);

	useTitle("Movie for id " + id);

	return (
		<>
			<div className={style.DetailsMovie}>
				<DetailsBanniereMovie state={state} />
				<div className={style.container}>
					<div className={style.data}>
						<div className={style.overview}>{state.overview}</div>
						<div className={style.ListCategorie}>
							{state.genres.map((item) => (
								<div key={item.id} className={style.categorie} id={item.id}>
									{item.name}
								</div>
							))}
						</div>
						<div className={style.companiesList}>
							{state.production_companies.map((item) => (
								<div key={item.id} className={style.categorie} id={item.id}>
									{item.name}
								</div>
							))}
						</div>
						<div className={style.ListMovies}>
							{similarMovies.map((item, index) => {
								return <MovieCard key={index} item={item} />;
							})}
						</div>
					</div>
				</div>
			</div>
			{LoaderValue && <Loader />}
		</>
	);
};
export default DetailsMovie;
