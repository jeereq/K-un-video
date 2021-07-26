import style from "../style/module/DetailsMovie.module.scss";
import DetailsBanniereTv from "../components/DetailsBanniereTv";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import useTitle from "../use/useTitle";
import { useParams } from "react-router-dom";
const DetailsTv = () => {
	const [LoaderValue, setLoader] = useState(true);
	const [state, setState] = useState({
		path: ""
	});
	const { id } = useParams();
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_KEY_USER_ID}&language=en-US`
		)
			.then((res) => res.json())
			.then((contentNews) => {
				setLoader(false);
				setState(contentNews);
			});
	}, []);
	useTitle("Tv show for id x");
	return (
		<>
			<div className={style.DetailsTv}>
				<DetailsBanniereTv state={state} />
				<div className={style.container}>
					<div className={style.data}></div>
				</div>
			</div>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default DetailsTv;
