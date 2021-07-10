import { useMemo, useState } from "react";
const useListLiens = (Liens, setState, style) => {
	const [stateLiens, setStateLien] = useState(Liens);

	useMemo(() => {
		console.log(style);
		const data = stateLiens.find((element) => element.nom === style.show.nom);
		if (data) setState((state) => ({ ...state, data: data.data }));
	}, [style.show]);

	const clickLien = (e) => {
		if (e.target.firstElementChild) {
			if (e.target.firstElementChild.classList.contains("arrow"))
				stateLiens.forEach((element) => {
					if (e.target.firstElementChild.classList.contains(element.nom))
						setState((state) => ({ ...state, show: { nom: element.nom } }));
				});
			return false;
		}
		setState((state) => ({ ...state, show: { nom: "all" } }));
	};
	return { stateLiens, setStateLien, clickLien };
};

export default useListLiens;
