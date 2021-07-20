import style from "../style/module/vueNEws.module.scss";
const VueNews = () => {
	return (
		<>
			<div className={style.vueNews}>
				<div className={style.top}>
					<div className={style.left}></div>
					<div className={style.right}></div>
				</div>
				<div className={style.middle}>
					<div className={style.center}></div>
					<div className={style.center}></div>
					<div className={style.center}></div>
				</div>
				<div className={style.bottom}>
					<div className={style.left}></div>
					<div className={style.right}></div>
				</div>
			</div>
		</>
	);
};
export default VueNews;
