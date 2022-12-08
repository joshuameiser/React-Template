import { LanguageAbbreviation } from "./../config/LanguageAbbreviation";
import { createContext, useCallback, useState } from "react";

interface context {
	language: LanguageAbbreviation;
	setLanguage: (currentLanguage: LanguageAbbreviation) => void;
}

export const useLanguage = (): context => {
	const [language, setLanguage] = useState(
		(window.localStorage.getItem("language") as LanguageAbbreviation) ??
			LanguageAbbreviation.EN
	);

	const setCurrentLanguage = useCallback(
		(currentLanguage: LanguageAbbreviation): void => {
			setLanguage(currentLanguage);
		},
		[]
	);

	return { language, setLanguage: setCurrentLanguage };
};

export const LanguageContext = createContext<context>({
	language: LanguageAbbreviation.EN,
	setLanguage: () => {},
});
