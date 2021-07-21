import Loader from "../components/Loader";
import MovieCard from "./MovieCard";
import { useState } from "react";
import useTitle from "../use/useTitle";
import style from "../style/module/Movie.module.scss";
const Movie = () => {
	const [LoaderValue, setLoader] = useState(false);
	useTitle("Movie show by k'un");
	return (
		<>
			<div className={style.container}>
				<div className={style.listCategorie}>
					<div className={style.categorieActive}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
				</div>

				<div className={style.listCards}>
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
				</div>
			</div>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default Movie;
