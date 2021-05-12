import { filterMovie } from "../pages/Home";
import { filterSerie } from "../pages/Home";

export default function More({ value }) {
	const {
		first,
		next,
		setNext,
		prevent,
		setPrevent,
		current,
		setCurrent,
		last,
		setCards,
		name
	} = value;

	function request(query, first) {
		fetch(
			"https://api.themoviedb.org/3/trending/" +
				query +
				"/week?api_key=23e640cfc012242a230d71adac41e090&page=" +
				first
		)
			.then((res) => res.json())
			.then((data1) => {
				if (name === "serie") {
					let newCards = filterSerie(data1);
					setCards(newCards);
				} else if (name === "film") {
					let newCards = filterMovie(data1);
					setCards(newCards);
				}
			});
	}

	return (
		<>
			<div className="more">
				<div
					className="item first"
					onClick={() => {
						let query = "";

						setCurrent(first);
						setNext(first + 1);
						setPrevent(first);

						if (name === "serie") query = "tv";
						if (name === "film") query = "movie";
						if (name === "news") query = "all";

						request(query, first);
					}}
				>
					{first}
				</div>
				<div
					className="item prev"
					onClick={() => {
						if (prevent > first) {
							let query = "";

							setCurrent(prevent);
							setPrevent(prevent - 1);
							setNext(prevent + 1);

							if (name === "serie") query = "tv";
							if (name === "film") query = "movie";
							if (name === "news") query = "all";

							request(query, prevent);
						}
					}}
				>
					{prevent}
				</div>
				<div className="item current">{current}</div>
				<div
					className="item next"
					onClick={() => {
						if (next < last) {
							let query = "";

							setCurrent(next);
							setNext(next + 1);
							setPrevent(next - 1);

							if (name === "serie") query = "tv";
							if (name === "film") query = "movie";
							if (name === "news") query = "all";

							request(query, next);
						}
					}}
				>
					{next}
				</div>
				<div
					className="item last"
					onClick={() => {
						let query = "";

						setCurrent(last);
						setNext(last);
						setPrevent(last - 1);

						if (name === "serie") query = "tv";
						if (name === "film") query = "movie";
						if (name === "news") query = "all";

						request(query, last);
					}}
				>
					{last}
				</div>
			</div>
		</>
	);
}
