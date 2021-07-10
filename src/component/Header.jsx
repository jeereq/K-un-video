import useEvent from "../use/event";
import ActualitesList from "./ActualitesList";

const Header = () => {
	const { mouseLeave, hoverMenu, Hover, stateStyle } = useEvent();

	return (
		<>
			<header>
				<div className="header">
					<div className="text">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
							laudantium architecto accusantium quasi quae facilis voluptatibus
							eius qui iste, assumenda nihil. Aut at accusantium eum perferendis
							temporibus. Ullam, enim a.
						</p>
					</div>
					<div className="date">friday 2021 | 11 | 13</div>
					<div className="reseaux">
						<div className="rSocial"></div>
						<div className="rSocial"></div>
						<div className="rSocial"></div>
						<div className="rSocial"></div>
					</div>
				</div>
				<div
					className={
						stateStyle.hover !== "hover" ? "container padding" : "container"
					}
				>
					<div className="logo">
						<img
							src="./image/LOGO_ENVIRONEWS_NEW_png.png"
							alt="logo environews"
						/>
					</div>
					<div className="pub"></div>
				</div>
				<nav className={stateStyle.hover !== "hover" ? "padding" : ""}>
					<div className="menus" onClick={hoverMenu}>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
					<ul>
						<li className="item">
							<a href="#a" className="active">
								acceuil
								<div className="arrow"></div>
							</a>
						</li>
						<li className="item" onClick={Hover}>
							<a href="#a">
								Actualites
								<div className="arrow actu Actualites"></div>
							</a>
						</li>
						<li className="item">
							<a href="#a">
								A propos
								<div className="arrow"></div>
							</a>
						</li>
						<li className="item" onClick={Hover}>
							<a href="#a">
								Services
								<div className="arrow actu Services"></div>
							</a>
						</li>
						<li className="item">
							<a href="#a">
								Contact
								<div className="arrow"></div>
							</a>
						</li>
					</ul>
					<form action="" method="get">
						<input type="search" name="q" id="q" />
					</form>
				</nav>
				<div className={stateStyle.hover} onClick={mouseLeave}>
					{stateStyle.show.nom === "all" && <ActualitesList />}
					{stateStyle.show.nom === "Actualites" && <ActualitesList />}
					{stateStyle.show.nom === "Services" && <ActualitesList />}
				</div>
			</header>
			<main></main>
		</>
	);
};

export default Header;
