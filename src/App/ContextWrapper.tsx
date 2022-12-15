import { ReactNode, useEffect } from "react";

import {
	isLanguage,
	LanguageAbbreviation,
} from "../config/LanguageAbbreviation";
import { LanguageContext, useLanguage } from "../context/languageContext";
import { ThemeContext, useTheme } from "../context/themeContext";

interface ContextWrapperProps {
	children: ReactNode;
}

export const ContextWrapper = (props: ContextWrapperProps) => {
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
				{props.children}
			</ThemeContext.Provider>
		</LanguageContext.Provider>
	);
};
