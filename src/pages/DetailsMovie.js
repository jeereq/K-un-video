import style from "../style/module/DetailsMovie.module.scss";
import { useState } from "react";
import DetailsBanniereMovie from "../components/DetailsBanniereMovie";
import Loader from "../components/Loader";
import useTitle from "../use/useTitle";
const DetailsMovie = () => {
	const [LoaderValue, setLoader] = useState(false);
	useTitle("Movie for id x");
	return (
		<>
			<div className={style.DetailsMovie}>
				<DetailsBanniereMovie />
				<div className={style.container}></div>
			</div>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default DetailsMovie;
