import style from "../style/module/Search.module.scss";
import Loader from "../components/Loader";
import { useState } from "react";
import useTitle from "../use/useTitle";
const Search = ({ selectedCategorie }) => {
	const [LoaderValue, setLoader] = useState(false);
	useTitle("search for queries :");
	console.log(selectedCategorie);

	return (
		<>
			<div className={style.Search}></div>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default Search;
