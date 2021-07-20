import Banniere from "../components/Banniere";
import VueMovie from "../components/VueMovie";
import VueTv from "../components/VueTv.jsx";
import VueNews from "../components/VueNews";
const Home = () => {
	return (
		<>
			<main>
				<Banniere />
				<VueMovie />
				<VueTv />
				<VueNews />
			</main>
		</>
	);
};
export default Home;
