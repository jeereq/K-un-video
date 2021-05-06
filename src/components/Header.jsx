import { Data } from "../data/dataHeader";
import { Link } from "react-router-dom";
export default function Header() {
	return (
		<>
			<header>
				<div className="logo"></div>
				<nav>
					<ul>
						{Data.map((lien) => {
							return (
								<li>
									<Link to={`/${lien}`}>{lien}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
		</>
	);
}
