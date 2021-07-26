import { useEffect, useState } from "react";
import style from "../style/module/Tv.module.scss";
const ListCategorie = ({
	ListCategorie,
	selectedCategorie,
	fetchCategorie
}) => {
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_KEY_USER_ID}&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => {
				fetchCategorie(data.genres);
				console.log(data.genres);
			});
	}, []);
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
