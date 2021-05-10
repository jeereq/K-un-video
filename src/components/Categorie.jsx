import { useContext } from "react";
import { ContexteGeneral } from "../pages/Home";
export default function Categorie({ name, active, keys, section }) {
	const { choiceOfCategorie } = useContext(ContexteGeneral);

	return (
		<>
			<div
				className={`Categorie ${active}`}
				onClick={() => {
					choiceOfCategorie(keys, section);
				}}
			>
				{name}
			</div>
		</>
	);
}
