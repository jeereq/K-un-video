import { Data } from "../data/dataHeader";
import { Link } from "react-router-dom";
export default function Header() {
	return (
		<>
			<header>
				<div className="top">
					<div className="logo">
						Gold <span>Vision</span>
					</div>
				</div>
				<div className="bottom">
					<nav>
						<ul>
							{Data.map((lien, index) => {
								return (
									<li key={index}>
										<Link to={`/${lien}`}>{lien}</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}
