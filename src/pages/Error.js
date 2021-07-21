import { useEffect, useState } from "react";
import useTitle from "../use/useTitle";
import style from "../style/module/Error.module.scss";
const Error = () => {
	const [compteur, setComteur] = useState(3);
	const ourCompteur = () => {
		setComteur((compteur) => compteur - 1);
	};
	useTitle("Error page");
	useEffect(() => {
		setTimeout(() => {
			if (compteur > 0) {
				ourCompteur();
			}
		}, 1500);
	});
	return (
		<>
			<div className={style.Error}>
				<div className={style.container}>
					<h1> page non repertorie </h1>
					<br />
					<p>redirection dans ... {compteur}s</p>
				</div>
			</div>
		</>
	);
};

export default Error;
