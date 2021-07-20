import style from "../style/module/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
	return (
		<>
			<footer>
				<div className={style.container}>
					<div className={style.logo}>
						K'un
						<div className={style.productBy}>
							by mj <span></span> jeereq
						</div>
					</div>
					<div className={style.explication}>
						<p>
							lorem loremlorem loremloremloremvlorem loremlorem lorem loremlorem
							lorem lorem lorem lorem lorem lorem lorem lorem lorem
						</p>
						<div className={style.reseauxSociaux}>
							<FontAwesomeIcon icon={faSearch} />
							<FontAwesomeIcon icon={faSearch} />
							<FontAwesomeIcon icon={faSearch} />
							<FontAwesomeIcon icon={faSearch} />
						</div>
					</div>
				</div>
				<div className={style.footer}>copy right 2021 by mj | jeereq</div>
			</footer>
		</>
	);
};
export default Footer;
