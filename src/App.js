import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { MovieStore } from "./pages/Movie";
import { TvStore } from "./pages/Tv";
import Contact from "./pages/Contact";
import { SearchStore } from "./store/SearchStore";
import Error from "./pages/Error";
import DetailsMovie from "./pages/DetailsMovie";
import DetailsTv from "./pages/DetailsTv";
import store from "./store";
import { Provider } from "react-redux";
const App = () => {
	console.log(process.env.REACT_APP_KEY_USER_ID);
	return (
		<>
			<Provider store={store}>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Movie" component={MovieStore} />
					<Route exact path="/Tv" component={TvStore} />
					<Route path="/Contact" component={Contact} />
					<Route path="/Search" component={SearchStore} />
					<Route path="/Movie/:id" component={DetailsMovie} />
					<Route path="/Tv/:id" component={DetailsTv} />
					<Route component={Error} />
				</Switch>
				<Footer />
			</Provider>
		</>
	);
};

export default App;
