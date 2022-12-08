import "./App.css";
import { ThemeContext, useTheme } from "../context/themeContext";
import { LanguageContext, useLanguage } from "../context/languageContext";
import { useEffect } from "react";
import i18n from "i18next";
import styled from "styled-components";
import {
	isLanguage,
	LanguageAbbreviation,
	languages,
} from "../config/LanguageAbbreviation";
import { initReactI18next } from "react-i18next";
import { ThemeToggle, LanguageToggle } from "@joshuameiser/component-library";

import { Config } from "../config/Config";

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: "" },
		de: { translation: "" },
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});

const StyledThemeToggle = styled(ThemeToggle)`
	position: fixed;
	top: 16px;
	right: 16px;
`;

const StyledLanguageToggle = styled(LanguageToggle)`
	position: fixed;
	top: 16px;
	right: 80px;
`;

function App() {
	// When switching routes the page scroll position resets
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

	const { theme, setTheme } = useTheme();
	const { language, setLanguage } = useLanguage();

	// color mode
	useEffect(() => {
		const savedTheme = window.localStorage.getItem("color-mode");
		if (savedTheme) setTheme(savedTheme);
		if (!savedTheme)
			setTheme(
				window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark-mode"
					: "light-mode"
			);
	}, []);

	useEffect(() => {
		console.log(theme);
	});

	// language
	useEffect(() => {
		const savedLanguage = window.localStorage.getItem("language");

		if (isLanguage(savedLanguage))
			setLanguage(savedLanguage as LanguageAbbreviation);
		const browserLanguage = navigator.language;
		let language = LanguageAbbreviation.EN;

		if (!savedLanguage) {
			// Checks if the browserLanguage contains a language used by us
			if (browserLanguage.startsWith("de")) {
				language = LanguageAbbreviation.DE;
			} else {
				language = LanguageAbbreviation.EN;
			}
			setLanguage(language);
		}
	}, []);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<div className="App" data-theme={theme}>
					<StyledThemeToggle theme={theme} setTheme={setTheme} />
					<StyledLanguageToggle
						language={language}
						setLanguage={setLanguage}
						languages={languages}
					/>
					<div>
						<p style={{ color: "var(--primaryColor)" }}>Primary Color</p>
						<p style={{ color: "var(--primaryHover)" }}>Primary Color</p>
						<p style={{ color: "var(--secondaryColor)" }}>Secondary Color</p>
						<p style={{ color: "var(--secondaryHover)" }}>Secondary Color</p>
						<p style={{ color: "var(--tertiaryColor)" }}>Tertiary Color</p>
						<p style={{ color: "var(--tertiaryHover)" }}>Tertiary Color</p>
					</div>
				</div>
			</ThemeContext.Provider>
		</LanguageContext.Provider>
	);
}

export default App;
