import { useEffect } from "react";

const Title = (Title) => {
	useEffect(() => {
		document.title = Title;
	}, [Title]);
};
export default Title;
