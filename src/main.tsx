import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./data/lightMode.scss";
import "./data/darkMode.scss";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
