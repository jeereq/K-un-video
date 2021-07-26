import style from "../style/module/Card.module.scss";
import { Link } from "react-router-dom";
const CardMovie = ({ item }) => {
	return (
		<>
			<Link to={`/Movie/${item.id}`} className={style.link}>
				<div className={style.cardMovie}>
					<img
						src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
						alt={item.title}
					/>
					<div className={style.text}>
						<h2>{item.title}</h2>
					</div>
				</div>
			</Link>
		</>
	);
};
export default CardMovie;
