import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/movie";
import Serie from "./pages/serie";
import { Switch, Route } from "react-router-dom";
import "./sass/index.scss";
function App() {
	return (
		<div className="App">
			<Header></Header>
			<Switch>
				<Route path="/serie">
					<Serie></Serie>
				</Route>
				<Route path="/movie">
					<Movie></Movie>
				</Route>
				<Route path="/">
					<Home></Home>
				</Route>
			</Switch>
		</div>
	);
}

export default App;

const changeTitleofDocument = () => {
	document.title = "jeereq react allocine";
};

changeTitleofDocument();
