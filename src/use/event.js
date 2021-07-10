import { useState } from "react";
import useListLiens from "./useListLiens";
import Liens from "../data/Liens";

const useEvent = () => {
	const [stateStyle, setState] = useState({
		hover: "hover",
		show: { nom: "all" },
		data: []
	});

	const { clickLien } = useListLiens(Liens, setState, stateStyle);

	const Hover = (e) => {
		if (stateStyle.hover === "hover")
			setState((state) => ({ ...state, hover: "hover visible" }));
		else {
			console.log(e.target.firstElementChild);
			if (e.target.firstElementChild.classList.contains(stateStyle.show.nom))
				setState((state) => ({ ...state, hover: "hover" }));
		}
		clickLien(e);
	};
	const hoverMenu = (e) => {
		if (stateStyle.hover === "hover")
			setState((state) => ({ ...state, hover: "hover visible" }));
		else {
			setState((state) => ({ ...state, hover: "hover" }));
		}
		clickLien(e);
	};
	const mouseLeave = (e) => {
		setState((state) => ({ ...state, hover: "hover" }));
		clickLien(e);
	};

	return { mouseLeave, hoverMenu, Hover, clickLien, stateStyle };
};
export default useEvent;
