import MiniHeader from "../MiniHeader";
import React, { useContext, useState, useEffect } from "react";
import Card from "../cards/Card";
import { ContexteGeneral } from "../../pages/Home";
import More from "../More";
import { filterMovie } from "../../pages/Home";

export const Contexte = React.createContext();

export default function SectionNews({ cardsSearch }) {
	const [Cards, setCards] = useState(cardsSearch);

	const [first, setFirst] = useState(1);
	const [prevent, setPrevent] = useState(1);
	const [current, setCurrent] = useState(1);
	const [next, setNext] = useState(2);
	const [last, setLast] = useState(1000);

	const { dataCat, setDataCategorie } = useContext(ContexteGeneral);
	const [name] = useState("film");

	useEffect(() => {
		setCards(cardsSearch);
	}, [cardsSearch]);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/trending/movie/week?api_key=23e640cfc012242a230d71adac41e090"
		)
			.then((res) => res.json())
			.then((data1) => {
				let newCards = filterMovie(data1);
				setCards(newCards);
			});
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
				setDataCategorie(Data);
			});
	}, []);

	return (
		<>
			<Contexte.Provider
				value={{
					Cards,
					setCards
				}}
			>
				<section id="film">
					<MiniHeader name={name} dataCat={dataCat}></MiniHeader>
					<div className="parent">
						<div className="container">
							{Cards.map(
								(
									{ id, name, transform, title, date, popular, nature },
									index
								) => {
									return (
										<Card
											id={id}
											key={index}
											title={title}
											image={name}
											styliser={transform}
											date={date}
											popular={popular}
											nature={nature}
										></Card>
									);
								}
							)}
							<More
								value={{
									first,
									setFirst,
									next,
									setNext,
									prevent,
									setPrevent,
									current,
									setCurrent,
									last,
									setLast,
									name,
									setCards
								}}
							></More>
						</div>
					</div>
				</section>
			</Contexte.Provider>
		</>
	);
}
