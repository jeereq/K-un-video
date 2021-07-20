import style from "../style/module/Banniere.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
const Banniere = () => {
	return (
		<>
			<div className={style.banniere}>
				<div className={style.middle}>
					<h1>name of Movie</h1>
					<div className={style.btn}>name of Movie</div>
					<div className={style.baton}></div>
					<div className={style.boule}>
						<NavLink to="/Movie/3" className={style.link}>
							<FontAwesomeIcon icon={faPlayCircle} />
						</NavLink>
					</div>
				</div>
				<div className={style.banniereBotom}></div>
			</div>
		</>
	);
};
export default Banniere;
