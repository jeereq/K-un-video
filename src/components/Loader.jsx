import style from "../style/module/Loader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrop } from "@fortawesome/free-solid-svg-icons";
const Loader = ({ setLoader }) => {
	return (
		<>
			<div className={style.Loader}>
				<div
					className={style.croix}
					onClick={() => {
						setLoader((state) => !state);
					}}
				>
					<FontAwesomeIcon icon={faCrop} />
				</div>
				<div className={style.animation}></div>
			</div>
		</>
	);
};
export default Loader;
