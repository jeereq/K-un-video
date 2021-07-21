import Loader from "../components/Loader";
import TvCard from "./TvCard";
import useTitle from "../use/useTitle";
import { useState } from "react";
import style from "../style/module/Tv.module.scss";
const Tv = () => {
	const [LoaderValue, setLoader] = useState(false);
	useTitle("Tv Show by k'un");
	return (
		<>
			<div className={style.container}>
				<div className={style.listCategorie}>
					<div className={style.categorieActive}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
					<div className={style.categorie}>name of cat</div>
				</div>

				<div className={style.listCards}>
					<TvCard />
					<TvCard />
					<TvCard />
					<TvCard />
					<TvCard />
					<TvCard />
					<TvCard />
					<TvCard />
					<TvCard />
					<TvCard />
					<TvCard />
					<TvCard />
				</div>
			</div>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default Tv;
