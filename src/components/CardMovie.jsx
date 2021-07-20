import style from "../style/module/Card.module.scss";
import { Link } from "react-router-dom";
const CardMovie = () => {
	return (
		<>
			<Link to="/Movie/1" className={style.link}>
				<div className={style.cardMovie}>
					<div className={style.text}>
						<h2>title name</h2>
						<p>
							lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
							lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
							lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
							lorem
						</p>
					</div>
				</div>
			</Link>
		</>
	);
};
export default CardMovie;
