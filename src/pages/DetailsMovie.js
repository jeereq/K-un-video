import style from "../style/module/DetailsMovie.module.scss";
import { useEffect, useState } from "react";
import DetailsBanniereMovie from "../components/DetailsBanniereMovie";
import Loader from "../components/Loader";
import useTitle from "../use/useTitle";
import { useParams } from "react-router-dom";
const DetailsMovie = () => {
	const [LoaderValue, setLoader] = useState(true);
	const [state, setSate] = useState({ poster_path: "" });
	const { id } = useParams();
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY_USER_ID}&language=en-US`
		)
			.then((res) => res.json())
			.then((contentNews) => {
				setLoader(false);
			});
	}, []);

	useTitle("Movie for id x");

	return (
		<>
			<div className={style.DetailsMovie}>
				<DetailsBanniereMovie />
				<div className={style.container}>
					{/* <img
						src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`}
						alt={state.poster_path}
					/> */}
				</div>
			</div>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default DetailsMovie;
