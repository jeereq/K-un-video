import { useState } from "react";
import style from "../style/module/Movie.module.scss";
const ListCategorie = ({ ListCategorie, selectedCategorie }) => {
	return (
		<>
			<div className={style.listCategorie}>
				{ListCategorie.map(({ id, name }, index) => (
					<Categorie
						key={id}
						name={name}
						id={id}
						selected={index === 0 ? true : false}
						selectedCategorie={selectedCategorie}
						index={index}
					/>
				))}
			</div>
		</>
	);
};
export const Categorie = ({ id, name, selected, selectedCategorie }) => {
	const [select, setSelect] = useState(selected);
	return (
		<>
			<div
				onClick={() => {
					selectedCategorie(id);
					if (id !== 1) setSelect((state) => !state);
				}}
				className={select ? style.categorieActive : style.categorie}
				id={id}
			>
				{name}
			</div>
		</>
	);
};

export default ListCategorie;
