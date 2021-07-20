import style from "../style/module/VueMovie.module.scss";
import CardMovie from "./CardMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
const VueMovie = () => {
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${process.env.REACT_APP_KEY_USER_ID}&language=en-US`
		).then((data) => console.log(data));
	}, []);
	return (
		<>
			<div className={style.vueMovie}>
				<header>
					<h1>
						<div className={style.logo}>
							<FontAwesomeIcon icon={faVideo} size="1x" />
						</div>
						Movie
					</h1>
				</header>
				<div className={style.parentList}>
					<div className={style.listCard}>
						<CardMovie />
						<CardMovie />
						<CardMovie />
						<CardMovie />
						<CardMovie />
						<CardMovie />
						<CardMovie />
						<CardMovie />
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

export default VueMovie;
