import style from "../style/module/DetailsMovie.module.scss";
import DetailsBanniereTv from "../components/DetailsBanniereTv";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import useTitle from "../use/useTitle";
import { useParams } from "react-router-dom";
const DetailsTv = () => {
	const [LoaderValue, setLoader] = useState(true);
	const [state, setState] = useState({ genres: [], production_companies: [] });
	const { id } = useParams();
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_KEY_USER_ID}&language=en-US`
		)
			.then((res) => res.json())
			.then((contentNews) => {
				setLoader(false);
				setState(contentNews);
				return fetch(
					`https://api.themoviedb.org/3/movie/4353/similar?api_key=23e640cfc012242a230d71adac41e090&language=en-US&page=1`
				);
			})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}, [id]);

	useTitle("Tv show for id x");

	return (
		<>
			<div className={style.DetailsTv}>
				<DetailsBanniereTv state={state} />
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
					</div>
				</div>
			</div>
			{LoaderValue && <Loader />}
		</>
	);
};
export default DetailsTv;
