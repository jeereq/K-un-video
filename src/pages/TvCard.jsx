import style from "../style/module/TvCard.module.scss";
import { Link } from "react-router-dom";
const TvCard = () => {
	return (
		<>
			<Link to="/Tv/2" className={style.link}>
				<div className={style.TvCard}></div>
			</Link>
		</>
	);
};
export default TvCard;
