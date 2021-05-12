import { useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ContexteGeneral } from "../pages/Home";
import { filterMovie } from "../pages/Home";
import { filterSerie } from "../pages/Home";

export default function Search({ name }) {
	const { setCardsSerieSearch, setCardsSearch } = useContext(ContexteGeneral);

	const search = useRef("");

	async function request(name, search) {
		let value = "";
		fetch(
			`https://api.themoviedb.org/3/search/${name}?api_key=23e640cfc012242a230d71adac41e090&language=en-US&page=1&query=${search.current.value}&include_adult=true`
		)
			.then((res) => res.json())
			.then((data) => {
				value = filterSerie(data);
			});
		return value;
	}
	const submit = (event) => {
		event.preventDefault();
		if (name === "serie") {
			fetch(
				`https://api.themoviedb.org/3/search/tv?api_key=23e640cfc012242a230d71adac41e090&language=en-US&page=1&query=${search.current.value}&include_adult=true`
			)
				.then((res) => res.json())
				.then((data) => {
					let newCards = filterSerie(data);
					setCardsSerieSearch(newCards);
				});
		} else if (name === "film") {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=23e640cfc012242a230d71adac41e090&language=en-US&query=${search.current.value}&page=1&include_adult=false`
			)
				.then((res) => res.json())
				.then((data) => {
					let newCards = filterMovie(data);
					setCardsSearch(newCards);
				});
		} else {
			fetch(
				`https://api.themoviedb.org/3/search/keyword?api_key=23e640cfc012242a230d71adac41e090&query=${search.current.value}&page=1`
			)
				.then((res) => res.json())
				.then((data) => console.log(data));
		}
	};
	const handleChange = (e) => {
		console.log(search.current.value);
	};
	useEffect(() => {}, []);
	return (
		<>
			<form action="" onSubmit={submit}>
				<input
					type="search"
					onChange={handleChange}
					name="q"
					placeholder="search"
					ref={search}
				/>
				<button type="submit">
					<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
				</button>
			</form>
		</>
	);
}
