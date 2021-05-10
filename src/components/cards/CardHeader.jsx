import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function CardHeader({ name, styled }) {
	return (
		<>
			<div className={` card ${styled}`}>
				<div className="play-circle">
					<FontAwesomeIcon icon={faPlayCircle} size="2x"></FontAwesomeIcon>
				</div>
				<img src={`movies/${name}`} alt="" />
			</div>
		</>
	);
}
