import Banniere from "../components/Banniere";
import VueMovie from "../components/VueMovie";
import VueTv from "../components/VueTv.jsx";
import VueNews from "../components/VueNews";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import useTitle from "../use/useTitle";
import { connect } from "react-redux";
import { allNewsMovie, allNewsTv } from "../store/newsSelectors";
import { addNewsMovie, addNewsTv } from "./newsActions";
const Home = ({ ListNewsTv, ListNewsMovie, fetchNewsTv, fetchNewsMovie }) => {
	const [LoaderValue, setLoader] = useState(true);

	useEffect(() => {
		fetch(
			` https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_KEY_USER_ID}`
		)
			.then((res) => res.json())
			.then((contentTv) => {
				fetchNewsTv(contentTv.results);
				return fetch(
					` https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_KEY_USER_ID}`
				);
			})
			.then((res) => res.json())
			.then((contentMovie) => {
				fetchNewsMovie(contentMovie.results);
				setLoader(false);
			});
	}, []);
	useTitle("page d'acceuil K'un");

	return (
		<>
			<main>
				<Banniere />
				<VueMovie ListNewsMovie={ListNewsMovie} />
				<VueTv ListNewsTv={ListNewsTv} />
				<VueNews />
			</main>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default Home;

export const HomeStore = connect(
	(state) => ({
		ListNewsTv: allNewsTv(state.categorie),
		ListNewsMovie: allNewsMovie(state.categorie)
	}),
	(dispatch) => ({
		fetchNewsMovie: (ListNewsMovie) => dispatch(addNewsMovie(ListNewsMovie)),
		fetchNewsTv: (ListNewsTv) => dispatch(addNewsTv(ListNewsTv))
	})
)(Home);
