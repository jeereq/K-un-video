import style from "../style/module/Card.module.scss";
import { Link } from "react-router-dom";
const CardTv = () => {
	return (
		<>
			<Link to="/Tv/2" className={style.link}>
				<div className={style.cardTv}>
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
export default CardTv;
