import Search from "./Search";
import AllCategorie from "./AllCategorie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export default function MiniHeader({ name, dataCat }) {
	return (
		<>
			<div className="header">
				<div className="top">
					<div className="title">
						<div className="icons">
							<FontAwesomeIcon icon={faFilm}></FontAwesomeIcon>
						</div>
						{name}
					</div>
					{name !== "news" ? <Search name={name}></Search> : ""}
				</div>
				{name !== "news" ? (
					<div className="bottom">
						<AllCategorie data={dataCat} section={name}></AllCategorie>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
}
