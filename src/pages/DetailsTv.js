import style from "../style/module/DetailsMovie.module.scss";
import DetailsBanniereTv from "../components/DetailsBanniereTv";
import Loader from "../components/Loader";
import { useState } from "react";
import useTitle from "../use/useTitle";
const DetailsTv = () => {
	const [LoaderValue, setLoader] = useState(false);
	useTitle("Tv show for id x");
	return (
		<>
			<div className={style.DetailsTv}>
				<DetailsBanniereTv />
				<div className={style.container}>
					<div className={style.data}></div>
				</div>
			</div>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default DetailsTv;
