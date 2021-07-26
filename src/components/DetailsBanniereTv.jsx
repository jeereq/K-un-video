import style from "../style/module/DetailsBanniere.module.scss";
const DetailsBanniereTv = ({ state }) => {
	console.log(state.backdrop_path);
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
						src={`https://image.tmdb.org/t/p/w300/${
							state.poster_path ? state.poster_path : state.backdrop_path
						}`}
						alt={`${state.backdrop_path}`}
					/>
				</div>
			</div>
		</>
	);
};
export default DetailsBanniereTv;
