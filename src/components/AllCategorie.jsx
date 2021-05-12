import Categorie from "./Categorie";

export default function AllCategorie({ data, section }) {
	return (
		<>
			<div className="AllCategorie">
				{data.map(({ name, styled, id }) => {
					return (
						<Categorie
							key={id}
							name={name}
							keys={id}
							active={styled}
							section={section}
						></Categorie>
					);
				})}
			</div>
		</>
	);
}
