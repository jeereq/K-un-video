import SectionHeader from "../components/section/sectionHeader";
import SectionNews from "../components/section/sectionNews";
import SectionGeneral from "../components/section/sectionGeneral";
import SectionFilm from "../components/section/SectionFilm";
import React, { useState, useEffect } from "react";

export const ContexteGeneral = React.createContext();

export default function Home() {
	const [dataCat, setDataCategorie] = useState([]);
	const [dataNewsCat, setDataNewsCat] = useState([]);
	const [dataGeneralCat, setDataGeneralCat] = useState([]);
	const [vueUnique, setVueUnique] = useState(false);
	const [keysId, setKeysId] = useState(null);

	useEffect(() => {
		console.log("keys per ", keysId);
	});

	useEffect(() => {
		if (keysId !== null) {
			fetch(
				`https://api.themoviedb.org/3/movie/${keysId}?api_key=23e640cfc012242a230d71adac41e090&language=en-US`
			)
				.then((res) => res.json())
				.then((data) => console.log(data));
		}
	}, [keysId]);

	const choiceOfCategorie = (keys, section) => {
		if (section === "news") {
			let dataCatSecondary = dataNewsCat.map(({ id, name }) => {
				if (id === keys) return { id, name, styled: "active" };
				return { id, name, styled: "" };
			});
			setDataNewsCat(dataCatSecondary);
		} else if (section === "serie") {
			let dataCatSecondary = dataGeneralCat.map(({ id, name }) => {
				if (id === keys) return { id, name, styled: "active" };
				return { id, name, styled: "" };
			});
			setDataGeneralCat(dataCatSecondary);
		} else {
			let dataCatSecondary = dataCat.map(({ id, name }) => {
				if (id === keys) return { id, name, styled: "active" };
				return { id, name, styled: "" };
			});
			setDataCategorie(dataCatSecondary);
		}
	};

	if (vueUnique) {
		console.log(vueUnique);
		console.log(keysId);
		return (
			<>
				<main>
					<ContexteGeneral.Provider
						value={{
							dataCat,
							setDataCategorie,
							choiceOfCategorie,
							dataNewsCat,
							setDataNewsCat,
							dataGeneralCat,
							setDataGeneralCat,
							setVueUnique,
							setKeysId
						}}
					></ContexteGeneral.Provider>
				</main>
			</>
		);
	}

	return (
		<>
			<main>
				<ContexteGeneral.Provider
					value={{
						dataCat,
						setDataCategorie,
						choiceOfCategorie,
						dataNewsCat,
						setDataNewsCat,
						dataGeneralCat,
						setDataGeneralCat,
						setVueUnique,
						setKeysId
					}}
				>
					<SectionHeader></SectionHeader>
					<SectionNews></SectionNews>
					<SectionGeneral></SectionGeneral>
					<SectionFilm></SectionFilm>)
				</ContexteGeneral.Provider>
			</main>
		</>
	);
}
