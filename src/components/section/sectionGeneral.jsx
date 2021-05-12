import MiniHeader from "../MiniHeader";
import React, { useContext, useEffect, useState } from "react";
import Card from "../cards/Card";
import { ContexteGeneral } from "../../pages/Home";
import { filterSerie } from "../../pages/Home";
import More from "../More";

export const Contexte = React.createContext();

export default function SectionGeneral({ cardsSerieSearch }) {
	const [Cards, setCards] = useState(cardsSerieSearch);
	const [name] = useState("serie");
	const { dataGeneralCat, setDataGeneralCat } = useContext(ContexteGeneral);
	const [first, setFirst] = useState(1);
	const [prevent, setPrevent] = useState(1);
	const [current, setCurrent] = useState(1);
	const [next, setNext] = useState(2);
	const [last, setLast] = useState(1000);

	useEffect(() => {
		setCards(cardsSerieSearch);
	}, [cardsSerieSearch]);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/trending/tv/week?api_key=23e640cfc012242a230d71adac41e090"
		)
			.then((res) => res.json())
			.then((data) => {
				let newCards = filterSerie(data);
				setCards(newCards);
			});
		fetch(
			"https://api.themoviedb.org/3/genre/tv/list?api_key=23e640cfc012242a230d71adac41e090&language=fr"
		)
			.then((res) => res.json())
			.then((data) => {
				let Data = data.genres.map(({ id, name }) => {
					return { id, name, styled: "" };
				});
				Data.push({ id: -1, name: "all", styled: "active" });
				Data.reverse();
				setDataGeneralCat(Data);
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
				<section id="all">
					<MiniHeader name={name} dataCat={dataGeneralCat}></MiniHeader>
					<div className="parent">
						<div className="container">
							{Cards.map(
								({ id, name, transform, title, date, popular }, index) => {
									return (
										<Card
											key={index}
											id={id}
											title={title}
											image={name}
											styliser={transform}
											date={date}
											popular={popular}
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
									setCards,
									name
								}}
							></More>
						</div>
					</div>
				</section>
			</Contexte.Provider>
		</>
	);
}
