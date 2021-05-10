import MiniHeader from "../MiniHeader";
import React, { useContext, useState, useEffect } from "react";
import { data } from "../../data/dataSectionHeader";
import Card from "../cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { ContexteGeneral } from "../../pages/Home";

export const Contexte = React.createContext();

export default function SectionNews() {
	const [Cards, setCards] = useState([]);
	const [ourCompteur, setOurCompteur] = useState(0);
	const { dataNewsCat, setDataNewsCat } = useContext(ContexteGeneral);
	const [name, setName] = useState("news");

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/trending/all/week?api_key=23e640cfc012242a230d71adac41e090"
		)
			.then((res) => res.json())
			.then((data1) => {
				let newCards = data1.results.map(
					({
						id,
						poster_path,
						title,
						name,
						release_date,
						vote_average,
						first_air_date
					}) => {
						let named = "";
						let dated = "";
						if (title !== undefined) {
							named = title;
							dated = release_date;
						} else if (named !== undefined) {
							named = name;
							dated = first_air_date;
						}
						return {
							id,
							name: poster_path,
							transform: 0,
							title: named,
							date: dated,
							popular: vote_average
						};
					}
				);
				setCards(newCards);
			});
	}, []);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/genre/movie/list?api_key=23e640cfc012242a230d71adac41e090&language=fr"
		)
			.then((res) => res.json())
			.then((data) => {
				let Data = data.genres.map(({ id, name }) => {
					return { id, name, styled: "" };
				});
				Data.push({ id: -1, name: "all", styled: "active" });
				Data.reverse();
				setDataNewsCat(Data);
			});
	}, []);

	const Click = (event) => {
		let widthCurrent = 220;
		if (window.innerWidth < 800) {
			widthCurrent = 170;
		} else if (window.innerWidth < 600) {
			widthCurrent = 120;
		}
		let current = event.currentTarget;
		let length = Cards.length;
		let width = window.innerWidth;
		let total = length * widthCurrent - width;

		if (current.classList.contains("left")) {
			if (ourCompteur > 0) {
				setOurCompteur((ourCompteur) => ourCompteur - 1);
				let Array = Cards.map(({ name, transform, title, date, popular }) => {
					return { name, transform: transform - 1, title, date, popular };
				});
				setCards(Array);
			}
		}

		if (current.classList.contains("right")) {
			if (ourCompteur < length && ourCompteur * 200 < total) {
				setOurCompteur((ourCompteur) => ourCompteur + 1);
				let Array = Cards.map(({ name, transform, title, date, popular }) => {
					return { name, transform: transform + 1, title, date, popular };
				});
				setCards(Array);
			}
		}
	};

	return (
		<>
			<Contexte.Provider
				value={{
					Cards,
					setCards
				}}
			>
				<section id="news">
					<MiniHeader name={name} dataCat={dataNewsCat}></MiniHeader>
					<div className="parent">
						<div className="btn left" onClick={Click}>
							<FontAwesomeIcon
								icon={faArrowCircleLeft}
								size="2x"
							></FontAwesomeIcon>
						</div>
						<div className="btn right" onClick={Click}>
							<FontAwesomeIcon
								icon={faArrowCircleRight}
								size="2x"
							></FontAwesomeIcon>
						</div>
						<div className="container">
							{Cards.map(
								({ id, name, transform, title, date, popular }, index) => {
									return (
										<Card
											id={id}
											key={index}
											image={name}
											styliser={transform}
											title={title}
											date={date}
											popular={popular}
										></Card>
									);
								}
							)}
						</div>
					</div>
				</section>
			</Contexte.Provider>
		</>
	);
}
