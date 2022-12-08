import { createContext, useCallback, useState } from "react";

interface context {
	theme: string;
	setTheme: (currentTheme: string) => void;
}

export const useTheme = (): context => {
	const [theme, setTheme] = useState(
		window.localStorage.getItem("color-mode") ?? ""
	);

	const setCurrentTheme = useCallback((currentTheme: string): void => {
		setTheme(currentTheme);
	}, []);

	return { theme, setTheme: setCurrentTheme };
};

export const ThemeContext = createContext<context>({
	theme: "",
	setTheme: () => {},
});
