import { useEffect } from "react";

const Title = (Title) => {
	useEffect(() => {
		document.title = Title;
		let root = document.querySelector("#root");
		root.scrollTop = 0;
	}, [Title]);
};
export default Title;
