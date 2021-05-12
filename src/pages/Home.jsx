import SectionHeader from "../components/section/sectionHeader";
import SectionNews from "../components/section/sectionNews";
import SectionGeneral from "../components/section/sectionGeneral";
import SectionFilm from "../components/section/SectionFilm";
import React, { useState, useEffect } from "react";
import CardVue from "../components/cards/CardVue";

export const ContexteGeneral = React.createContext();

export function filterSerie(data) {
	let newCards = data.results.map(
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
			let nature = "";
			if (title !== undefined) {
				named = title;
				dated = release_date;
				nature = "film";
			} else if (named !== undefined) {
				named = name;
				dated = first_air_date;
				nature = "serie";
			}
			return {
				id,
				name: poster_path,
				transform: 0,
				title: named,
				date: dated,
				popular: vote_average,
				nature
			};
		}
	);
	return newCards;
}
export function filterMovie(data) {
	let newCards = data.results.map((element) => ({
		id: element.id,
		name: element.poster_path,
		transform: 0,
		title: element.title,
		date: element.release_date,
		popular: element.vote_average,
		nature: "film"
	}));
	return newCards;
}

export default function Home() {
	const [dataCat, setDataCategorie] = useState([]);
	const [dataNewsCat, setDataNewsCat] = useState([]);
	const [dataGeneralCat, setDataGeneralCat] = useState([]);
	const [vueUnique, setVueUnique] = useState(false);
	const [keysId, setKeysId] = useState(null);
	const [DataToShow, setDataToShow] = useState("");
	const [Cards, setCards] = useState([]);
	const [nature, setNature] = useState("");
	const [acteur, setActeur] = useState("");
	const [cardsSearch, setCardsSearch] = useState([]);
	const [cardsSerieSearch, setCardsSerieSearch] = useState([]);

	useEffect(() => {
		const url = `https://api.themoviedb.org/3/movie/${keysId}?api_key=23e640cfc012242a230d71adac41e090&language=en-US`;

		if (keysId !== null && nature === "film") {
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setDataToShow(data);
				});
			fetch(
				`https://api.themoviedb.org/3/movie/${keysId}/similar?api_key=23e640cfc012242a230d71adac41e090&language=en-US&page=1`
			)
				.then((res) => res.json())
				.then((data) => {
					let newCards = filterSerie(data);
					setCards(newCards);
				});
			fetch(
				`https://api.themoviedb.org/3/movie/${keysId}/credits?api_key=23e640cfc012242a230d71adac41e090&language=en-US`
			)
				.then((res) => res.json())
				.then((data) => {
					setActeur(data.cast);
				});
		}
	}, [keysId, nature]);

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
			if (keys !== -1) {
				fetch(
					`https://api.themoviedb.org/3/discover/tv?api_key=23e640cfc012242a230d71adac41e090&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${keys}&include_null_first_air_dates=false&with_watch_monetization_types=flatrat`
				)
					.then((res) => res.json())
					.then((data) => {
						let newCards = filterSerie(data);
						setCardsSerieSearch(newCards);
					});
			}
			setDataGeneralCat(dataCatSecondary);
		} else {
			let dataCatSecondary = dataCat.map(({ id, name }) => {
				if (id === keys) return { id, name, styled: "active" };
				return { id, name, styled: "" };
			});
			if (keys !== -1) {
				fetch(
					`https://api.themoviedb.org/3/discover/movie?api_key=23e640cfc012242a230d71adac41e090&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=${keys}&with_watch_monetization_types=flatrate`
				)
					.then((res) => res.json())
					.then((data) => {
						let newCards = filterMovie(data);
						setCardsSearch(newCards);
					});
			}
			setDataCategorie(dataCatSecondary);
		}
	};

	if (vueUnique) {
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
							setKeysId,
							nature,
							setNature,
							acteur,
							setActeur,
							setCardsSearch,
							setCardsSerieSearch
						}}
					>
						<CardVue
							image={DataToShow.backdrop_path}
							resume={DataToShow}
							Cards={Cards}
							setKeysId={setKeysId}
							setVueUnique={setVueUnique}
						></CardVue>
					</ContexteGeneral.Provider>
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
						setKeysId,
						nature,
						setNature,
						setCardsSearch,
						setCardsSerieSearch
					}}
				>
					<SectionHeader></SectionHeader>
					<SectionNews></SectionNews>
					<SectionGeneral cardsSerieSearch={cardsSerieSearch}></SectionGeneral>
					<SectionFilm cardsSearch={cardsSearch}></SectionFilm>)
				</ContexteGeneral.Provider>
			</main>
		</>
	);
}
