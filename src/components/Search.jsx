import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search({ submit }) {
	const search = useRef("");
	const handleChange = (e) => {
		console.log(search.current.value);
	};
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
