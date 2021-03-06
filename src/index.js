import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./style/global/index.scss";
require("dotenv");

render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>,
	document.getElementById("root")
);
