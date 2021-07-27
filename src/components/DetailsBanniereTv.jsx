import style from "../style/module/DetailsBanniere.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
const DetailsBanniereTv = ({ state }) => {
	console.log(state);
	return (
		<>
			<div className={style.DetailsBanniereTv}>
				<img
					src={`https://image.tmdb.org/t/p/w500/${
						state.poster_path ? state.poster_path : state.backdrop_path
					}`}
					alt={`${state.backdrop_path}`}
				/>
				<div className={style.leftImage}>
					<img
						src={`https://image.tmdb.org/t/p/w400/${
							state.poster_path ? state.poster_path : state.backdrop_path
						}`}
						alt={`${state.backdrop_path}`}
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
							{state.number_of_episodes}
							<FontAwesomeIcon icon={faVideo} color={" #cfa55b"} />
						</span>
						<span>
							{state.number_of_seasons}
							<FontAwesomeIcon icon={faTv} color={" #cfa55b"} />
						</span>
					</div>
					<div className={style.identite}>{state.name}</div>
				</div>
			</div>
		</>
	);
};
export default DetailsBanniereTv;
