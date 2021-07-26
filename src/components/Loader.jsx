import style from "../style/module/Loader.module.scss";
const Loader = () => {
	return (
		<>
			<div className={style.Loader}>
				<div className={style.spinner}>
					<div className={style.child}></div>
					<div className={style.child}></div>
				</div>
			</div>
		</>
	);
};
export default Loader;
