import style from "../style/module/DetailsMovie.module.scss";
import DetailsBanniereMovie from "../components/DetailsBanniereMovie";
const DetailsMovie = () => {
	return (
		<>
			<div className={style.DetailsMovie}>
				<DetailsBanniereMovie />
				<div className={style.container}></div>
			</div>
		</>
	);
};
export default DetailsMovie;
