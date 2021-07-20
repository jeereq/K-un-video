import style from "../style/module/DetailsMovie.module.scss";
import DetailsBanniereTv from "../components/DetailsBanniereTv";
const DetailsTv = () => {
	return (
		<>
			<div className={style.DetailsTv}>
				<DetailsBanniereTv />
				<div className={style.container}>
					<div className={style.data}></div>
				</div>
			</div>
		</>
	);
};
export default DetailsTv;
