import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./data/lightMode.scss";
import "./data/darkMode.scss";

import "./index.css";
import { ContextWrapper } from "./App/ContextWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ContextWrapper>
			<App />
		</ContextWrapper>
	</React.StrictMode>
);
