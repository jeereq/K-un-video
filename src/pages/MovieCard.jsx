import style from "../style/module/MovieCard.module.scss";
import { Link } from "react-router-dom";
const MovieCard = ({ item }) => {
	return (
		<>
			<Link to={`/Movie/${item.id}`} className={style.link}>
				<div className={style.MovieCard}>
					<img
						src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
						alt={item.name}
					/>
				</div>
			</Link>
		</>
	);
};
export default MovieCard;
