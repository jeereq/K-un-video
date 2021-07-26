import style from "../style/module/Header.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { selectedCategorie } from "../store/categorieSelector";
const Header = () => {
	return (
		<>
			<header className={style.Header}>
				<div className={style.top}>
					<div className={style.logo}>
						K'un
						<div className={style.productBy}>
							by mj <span></span> jeereq
						</div>
					</div>
					<form
						action="/Search"
						onSubmit={(e) => {
							// e.preventDefault();
						}}
					>
						<input type="search" name="q" placeholder="search"></input>
						<button type="submit">
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</form>
				</div>
				<nav className={style.nav}>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/Tv">Tv</NavLink>
						</li>
						<li>
							<NavLink to="/Movie">Movie</NavLink>
						</li>
						<li>
							<NavLink to="/Contact">Contact</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
export default Header;
