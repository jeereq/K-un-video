import style from "../style/module/Card.module.scss";
import { Link } from "react-router-dom";
const CardTv = ({ item }) => {
	return (
		<>
			<Link to={`/Tv/${item.id}`} className={style.link}>
				<div className={style.cardTv}>
					<img
						src={`https://image.tmdb.org/t/p/w300/${
							item.poster_path ? item.poster_path : item.backdrop_path
						}`}
						alt={item.name}
					/>
					<div className={style.text}>
						<h2>{item.name}</h2>
					</div>
				</div>
			</Link>
		</>
	);
};
export default CardTv;
