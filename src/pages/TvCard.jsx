import style from "../style/module/TvCard.module.scss";
import { Link } from "react-router-dom";
const TvCard = ({ item }) => {
	return (
		<>
			<Link to={`/Tv/${item.id}`} className={style.link}>
				<div className={style.TvCard}>
					<img
						src={`https://image.tmdb.org/t/p/w500/${
							item.poster_path ? item.poster_path : item.backdrop_path
						}`}
						alt={item.name}
					/>
				</div>
			</Link>
		</>
	);
};
export default TvCard;
