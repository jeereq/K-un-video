import { useEffect } from "react";

const Title = (Title) => {
	useEffect(() => {
		document.title = Title;
		let root = document.querySelector("#root");
		root.scrollIntoView();
	}, [Title]);
};
export default Title;
