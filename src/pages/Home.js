import Banniere from "../components/Banniere";
import VueMovie from "../components/VueMovie";
import VueTv from "../components/VueTv.jsx";
import VueNews from "../components/VueNews";
import Loader from "../components/Loader";
import { useState } from "react";
import useTitle from "../use/useTitle";
const Home = () => {
	const [LoaderValue, setLoader] = useState(false);
	useTitle("page d'acceuil K'un");
	return (
		<>
			<main>
				<Banniere />
				<VueMovie />
				<VueTv />
				<VueNews />
			</main>
			{LoaderValue && <Loader setLoader={setLoader} />}
		</>
	);
};
export default Home;
