import MiniHeader from "../MiniHeader";
import React, { useContext, useEffect, useState } from "react";
import { data } from "../../data/dataSectionHeader";
import Card from "../cards/Card";
import { ContexteGeneral } from "../../pages/Home";

export const Contexte = React.createContext();

export default function SectionGeneral() {
	const [Cards, setCards] = useState(data);
	const [name, setName] = useState("serie");
	const { dataGeneralCat, setDataGeneralCat } = useContext(ContexteGeneral);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/trending/tv/week?api_key=23e640cfc012242a230d71adac41e090"
		)
			.then((res) => res.json())
			.then((data1) => {
				let newCards = data1.results.map((element) => ({
					id: element.id,
					name: element.poster_path,
					title: element.name,
					date: element.first_air_date,
					popular: element.vote_average
				}));
				setCards(newCards);
			});
	}, []);
	useEffect(() => {
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
						</div>
					</div>
				</section>
			</Contexte.Provider>
		</>
	);
}
