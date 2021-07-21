import style from "../style/module/MovieCard.module.scss";
import { Link } from "react-router-dom";
const MovieCard = () => {
	return (
		<>
			<Link to="/Movie/2" className={style.link}>
				<div className={style.MovieCard}></div>
			</Link>
		</>
	);
};
export default MovieCard;
