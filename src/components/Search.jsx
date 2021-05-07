import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search({ submit }) {
	return (
		<>
			<form action="" onSubmit={submit}>
				<input type="search" name="q" placeholder="search" />
				<button type="submit">
					<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
				</button>
			</form>
		</>
	);
}
