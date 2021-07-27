import style from "../style/module/DetailsBanniere.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const DetailsBanniereMovie = ({ state }) => {
	return (
		<>
			<div className={style.DetailsBanniereMovie}>
				<img
					src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`}
					alt={state.poster_path}
				/>
				<div className={style.leftImage}>
					<img
						src={`https://image.tmdb.org/t/p/w400/${state.poster_path}`}
						alt={state.poster_path}
					/>
					<div className={style.star}>
						<span>
							{state.vote_average}
							<FontAwesomeIcon icon={faStar} color={" #cfa55b"} />
						</span>

						<span>
							{state.original_language}
							<FontAwesomeIcon icon={faLanguage} color={" #cfa55b"} />
						</span>
						<span>
							{`${Math.round(state.runtime / 60)}h${state.runtime % 60}`}
							<FontAwesomeIcon icon={faClock} color={" #cfa55b"} />
						</span>
					</div>
					<div className={style.identite}>{state.title}</div>
				</div>
			</div>
		</>
	);
};
export default DetailsBanniereMovie;
