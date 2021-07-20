import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Error from "./pages/Error";
import DetailsMovie from "./pages/DetailsMovie";
import DetailsTv from "./pages/DetailsTv";

const App = () => {
	console.log(process.env.REACT_APP_KEY_USER_ID);
	return (
		<>
			<Header />
			<Switch>
				<Route path="/Home" component={Home} />
				<Route exact path="/Movie" component={Movie} />
				<Route exact path="/Tv" component={Tv} />
				<Route path="/Contact" component={Contact} />
				<Route path="/Search" component={Search} />
				<Route path="/Movie/:id" component={DetailsMovie} />
				<Route path="/Tv/:id" component={DetailsTv} />
				<Route exact path="/" component={Home} />
				<Route component={Error} />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
