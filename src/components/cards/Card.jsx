import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ContexteGeneral } from "../../pages/Home";
import { useContext } from "react";

export default function Card({
	id,
	image,
	styliser,
	title,
	date,
	popular,
	nature
}) {
	let resultat = 100 * styliser;
	const { setVueUnique, setKeysId, setNature } = useContext(ContexteGeneral);

	return (
		<>
			<a href="#vues">
				<div className="big-card">
					<div
						className="Card"
						style={{ transform: `translatex(-${resultat}%)` }}
						onClick={() => {
							setVueUnique(true);
							setKeysId(id);
							setNature(nature);
						}}
					>
						<img
							src={`https://image.tmdb.org/t/p/w200/${image}`}
							alt={`ilustration de ${title}`}
							title={title}
						/>
						<div className="title">{title}</div>
						<div className="details">
							<div className="date">{date}</div>
							<div className="popular">
								{popular} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
							</div>
						</div>
					</div>
				</div>
			</a>
		</>
	);
}
