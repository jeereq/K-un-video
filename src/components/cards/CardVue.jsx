import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { ContexteGeneral } from "../../pages/Home";
import { useContext } from "react";

export default function CardVue({ image, resume, Cards }) {
	const { setKeysId, setVueUnique, nature, acteur } =
		useContext(ContexteGeneral);
	let production = [];
	let countries = [];
	let genres = [];
	let ourActeur = [];

	if (nature === "film") {
		if (image == null) {
			image = resume.poster_path;
		}
		if (resume.production_companies)
			production = resume.production_companies.map((item, key) => {
				return (
					<div key={key} className="item">
						{item.name}
					</div>
				);
			});
		if (resume.production_countries)
			countries = resume.production_countries.map((item, key) => {
				return (
					<div key={key} className="item">
						{item.name}
					</div>
				);
			});
		if (resume.genres) {
			genres = resume.genres.map((item, key) => {
				return (
					<div key={key} className="item">
						{item.name}
					</div>
				);
			});
			if (genres.length === 0) genres = " not found";
		}
		if (acteur) {
			ourActeur = acteur.map((item) => {
				if (item.profile_path != undefined)
					return (
						<div className="acteur" key={item.id} title={item.name}>
							<img
								src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
								alt={item.name}
							/>
							<div className="name">{item.name}</div>
						</div>
					);
			});
		}

		const Croix = () => {
			setKeysId(null);
			setVueUnique(false);
		};

		return (
			<>
				<section id="vues">
					<div className="croix" onClick={() => Croix()}>
						<FontAwesomeIcon icon={faTimes} size="2x"></FontAwesomeIcon>
					</div>
					<div className="vues">
						<div className="title">{resume.title}</div>
						<img src={`https://image.tmdb.org/t/p/original/${image}`} alt="" />

						<div className="image">
							<img
								src={`https://image.tmdb.org/t/p/original/${image}`}
								alt=""
							/>
							<div className="right">
								<div className="star">
									{resume.vote_average}
									<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
								</div>
								<div className="lang">lang : {resume.original_language}</div>
								<div className="tagline">tagline : {resume.tagline}</div>
								<div className="time">time : {resume.runtime} min </div>
								<div className="date">release date : {resume.release_date}</div>
								<div className="vote">vote : {resume.vote_count}</div>
								<div className="homePage">
									homepage of movie :
									<a href={resume.homepage} target="blanck">
										{resume.homepage}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="text">{resume.overview}</div>
					<div className="production genres">{genres}</div>
					<div className="acteurs">{ourActeur}</div>
					<div className="production">{production}</div>
					<div className="production countries">{countries}</div>
					<div className="card">
						{Cards.length !== 0
							? Cards.map(
									(
										{ id, name, transform, title, date, popular, nature },
										index
									) => {
										return (
											<Card
												id={id}
												key={index}
												image={name}
												styliser={transform}
												title={title}
												date={date}
												popular={popular}
												nature={nature}
											></Card>
										);
									}
							  )
							: "not found"}
					</div>
				</section>
			</>
		);
	} else {
		return <>vide mon ards</>;
	}
}
