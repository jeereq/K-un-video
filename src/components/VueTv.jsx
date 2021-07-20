import style from "../style/module/VueMovie.module.scss";
import CardTv from "./CardTv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
const vueMovie = () => {
	return (
		<>
			<div className={style.vueTv}>
				<header>
					<h1>
						<div className={style.logo}>
							<FontAwesomeIcon icon={faTv} size="1x" />
						</div>
						Tv
					</h1>
				</header>
				<div className={style.parentList}>
					<div className={style.listCard}>
						<CardTv />
						<CardTv />
						<CardTv />
						<CardTv />
						<CardTv />
						<CardTv />
						<CardTv />
						<CardTv />
					</div>
				</div>
				<div className={style.pagination}>
					<div className={style.leftArrow}>
						<FontAwesomeIcon icon={faAngleDoubleLeft} size="1x" />
					</div>
					<div className={style.rightArrow}>
						<FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />
					</div>
				</div>
			</div>
		</>
	);
};

export default vueMovie;
